import * as CANNON from 'cannon-es';
import * as THREE from 'three'; // For camera direction vector

// Handles human player input (keyboard + touch) for Pokka's Bash Arena
export class PlayerController {
  private playerBody: CANNON.Body;
  private domElement: HTMLElement;
  private isMobile: boolean;
  public moveState: { forward: number; backward: number; left: number; right: number };
  private touchJoystick: { base: HTMLDivElement; stick: HTMLDivElement } | null;
  private onKeyDownRef: (event: KeyboardEvent) => void;
  private onKeyUpRef: (event: KeyboardEvent) => void;

  // Touch control state
  private touchId: number | null = null;
  private joystickCenter: { x: number, y: number } | null = null;
  private readonly joystickRadius = 50; // px, half of joystickBase width/height
  private readonly moveForce = 25; // Slightly increased force

  // To store camera forward direction (on XZ plane)
  private cameraDirection = new THREE.Vector3();

  constructor(playerBody: CANNON.Body, domElement: HTMLElement, isMobile: boolean) {
    this.playerBody = playerBody;
    this.domElement = domElement;
    this.isMobile = isMobile;
    this.moveState = { forward: 0, backward: 0, left: 0, right: 0 };
    this.touchJoystick = null;

    this.onKeyDownRef = this.onKeyDown.bind(this);
    this.onKeyUpRef = this.onKeyUp.bind(this);

    this.initEventListeners();
    if (this.isMobile) {
      this.initTouchControls();
    }
  }

  // Method to update camera direction from GameCanvas
  public updateCameraDirection(camera: THREE.Camera): void {
    camera.getWorldDirection(this.cameraDirection);
    this.cameraDirection.y = 0; // Project onto XZ plane
    this.cameraDirection.normalize();
  }

  private onKeyDown(event: KeyboardEvent): void {
    switch (event.code) {
      case 'KeyW': case 'ArrowUp': this.moveState.forward = 1; break;
      case 'KeyS': case 'ArrowDown': this.moveState.backward = 1; break;
      case 'KeyA': case 'ArrowLeft': this.moveState.left = 1; break;
      case 'KeyD': case 'ArrowRight': this.moveState.right = 1; break;
    }
  }

  private onKeyUp(event: KeyboardEvent): void {
    switch (event.code) {
      case 'KeyW': case 'ArrowUp': this.moveState.forward = 0; break;
      case 'KeyS': case 'ArrowDown': this.moveState.backward = 0; break;
      case 'KeyA': case 'ArrowLeft': this.moveState.left = 0; break;
      case 'KeyD': case 'ArrowRight': this.moveState.right = 0; break;
    }
  }

  initEventListeners(): void {
    this.domElement.ownerDocument.addEventListener('keydown', this.onKeyDownRef);
    this.domElement.ownerDocument.addEventListener('keyup', this.onKeyUpRef);
    // TODO: Add listeners for back button (e.g., Escape key or a UI button)
  }

  initTouchControls(): void {
    const joystickBase = document.createElement('div');
    joystickBase.style.cssText = `
      position: absolute; bottom: 30px; left: 30px; width: 100px; height: 100px;
      background-color: rgba(128, 128, 128, 0.3); border-radius: 50%;
      display: flex; justify-content: center; align-items: center; z-index: 10;
    `;

    const joystickStick = document.createElement('div');
    joystickStick.style.cssText = `
      width: 60px; height: 60px; background-color: rgba(0, 0, 0, 0.4);
      border-radius: 50%;
    `;
    joystickBase.appendChild(joystickStick);
    // Ensure mountRef.current exists and is part of the DOM before appending
    this.domElement.parentNode?.appendChild(joystickBase);
    this.touchJoystick = { base: joystickBase, stick: joystickStick };

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);

    joystickBase.addEventListener('touchstart', this.onTouchStart, { passive: false });
    this.domElement.ownerDocument.addEventListener('touchmove', this.onTouchMove, { passive: false });
    this.domElement.ownerDocument.addEventListener('touchend', this.onTouchEnd);
    this.domElement.ownerDocument.addEventListener('touchcancel', this.onTouchEnd);
  }

  private onTouchStart(event: TouchEvent): void {
    event.preventDefault(); // Prevent page scroll/zoom
    const touch = event.changedTouches[0];
    if (this.touchJoystick && this.touchJoystick.base.contains(touch.target as Node)) {
        this.touchId = touch.identifier;
        const rect = this.touchJoystick.base.getBoundingClientRect();
        this.joystickCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        this.updateJoystickStick(touch.clientX, touch.clientY);
    }
  }

  private onTouchMove(event: TouchEvent): void {
    if (this.touchId === null) return;
    for (let i = 0; i < event.changedTouches.length; i++) {
      const touch = event.changedTouches[i];
      if (touch.identifier === this.touchId) {
        event.preventDefault(); // Prevent page scroll/zoom during joystick operation
        this.updateJoystickStick(touch.clientX, touch.clientY);
        break;
      }
    }
  }

  private updateJoystickStick(clientX: number, clientY: number): void {
    if (!this.joystickCenter || !this.touchJoystick) return;

    let deltaX = clientX - this.joystickCenter.x;
    let deltaY = clientY - this.joystickCenter.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance > this.joystickRadius) {
      deltaX = (deltaX / distance) * this.joystickRadius;
      deltaY = (deltaY / distance) * this.joystickRadius;
    }

    this.touchJoystick.stick.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0px)`;

    // Update moveState based on joystick position (normalized)
    // Invert Y because screen Y is downwards, but game forward is often +Z or -Z
    const normalizedX = deltaX / this.joystickRadius;
    const normalizedY = -deltaY / this.joystickRadius; // Inverted Y

    this.moveState.forward = Math.max(0, normalizedY);
    this.moveState.backward = Math.max(0, -normalizedY);
    this.moveState.right = Math.max(0, normalizedX);
    this.moveState.left = Math.max(0, -normalizedX);
  }

  private onTouchEnd(event: TouchEvent): void {
    for (let i = 0; i < event.changedTouches.length; i++) {
      const touch = event.changedTouches[i];
      if (touch.identifier === this.touchId) {
        this.touchId = null;
        this.joystickCenter = null;
        if (this.touchJoystick) {
          this.touchJoystick.stick.style.transform = `translate3d(0px, 0px, 0px)`;
        }
        this.moveState.forward = 0;
        this.moveState.backward = 0;
        this.moveState.left = 0;
        this.moveState.right = 0;
        break;
      }
    }
  }

  update(deltaTime: number): void {
    if (!this.playerBody) return;

    const { forward, backward, left, right } = this.moveState;
    const worldForce = new CANNON.Vec3(0, 0, 0);
    const scaledForce = this.moveForce * (60 * deltaTime); // Scale for 60 FPS target, maintaining original force feel

    // Calculate forward/backward force relative to camera
    if (forward) {
      worldForce.x += this.cameraDirection.x * scaledForce;
      worldForce.z += this.cameraDirection.z * scaledForce;
    }
    if (backward) {
      worldForce.x -= this.cameraDirection.x * scaledForce;
      worldForce.z -= this.cameraDirection.z * scaledForce;
    }

    // Calculate left/right strafe force relative to camera (perpendicular to cameraDirection)
    const strafeDirection = new THREE.Vector3(-this.cameraDirection.z, 0, this.cameraDirection.x); // Right-hand perpendicular vector
    if (left) {
      // Apply force opposite to the strafe (right) direction
      worldForce.x -= strafeDirection.x * scaledForce;
      worldForce.z -= strafeDirection.z * scaledForce;
    }
    if (right) {
      // Apply force in the strafe (right) direction
      worldForce.x += strafeDirection.x * scaledForce;
      worldForce.z += strafeDirection.z * scaledForce;
    }
    
    if (worldForce.lengthSquared() > 0) {
        this.playerBody.applyForce(worldForce, this.playerBody.position);
    }
    
    const maxSpeed = 5;
    if (this.playerBody.velocity.lengthSquared() > maxSpeed * maxSpeed) {
        this.playerBody.velocity.normalize();
        this.playerBody.velocity.scale(maxSpeed, this.playerBody.velocity);
    }
  }

  dispose(): void {
    this.domElement.ownerDocument.removeEventListener('keydown', this.onKeyDownRef);
    this.domElement.ownerDocument.removeEventListener('keyup', this.onKeyUpRef);

    if (this.isMobile && this.touchJoystick) {
      this.touchJoystick.base.removeEventListener('touchstart', this.onTouchStart);
      this.domElement.ownerDocument.removeEventListener('touchmove', this.onTouchMove);
      this.domElement.ownerDocument.removeEventListener('touchend', this.onTouchEnd);
      this.domElement.ownerDocument.removeEventListener('touchcancel', this.onTouchEnd);
      this.touchJoystick.base.remove();
      this.touchJoystick = null;
    }
  }
} 