import { createMachine, MachineConfig, send } from 'xstate';
import { GHOST_EXIT_POSITION, GHOST_HOUSE_POSITION } from './gameConstants';

export type GhostMode = 'house' | 'exiting' | 'scatter' | 'chase' | 'frightened' | 'eaten';

interface GhostStateContext {
  mode: GhostMode;
  target: { x: number; y: number };
  scatterTarget: { x: number; y: number };
  lastModeChange: number;
  isReleased: boolean;
  exitProgress: number;
  position: { x: number; y: number };
}

interface GhostStateSchema {
  states: {
    house: {};
    exiting: {};
    scatter: {};
    chase: {};
    frightened: {};
    eaten: {};
  };
}

type GhostEvent = 
  | { type: 'POWER_PELLET' }
  | { type: 'EATEN' }
  | { type: 'EXIT_COMPLETE' }
  | { type: 'UPDATE_POSITION', position: { x: number; y: number } }
  | { type: 'UPDATE_CHASE_TARGET', target: { x: number; y: number } };

export const createGhostStateMachine = (scatterTarget: { x: number; y: number }, spawnDelay: number) => {
  const config: MachineConfig<GhostStateContext, GhostStateSchema, GhostEvent> = {
    id: 'ghost',
    initial: 'house',
    context: {
      mode: 'house',
      target: GHOST_HOUSE_POSITION,
      scatterTarget,
      lastModeChange: Date.now(),
      isReleased: false,
      exitProgress: 0,
      position: GHOST_HOUSE_POSITION
    },
    states: {
      house: {
        entry: (context) => {
          context.mode = 'house';
          context.target = GHOST_HOUSE_POSITION;
          context.isReleased = false;
          context.exitProgress = 0;
          context.lastModeChange = Date.now();
        },
        after: {
          SPAWN_DELAY: 'exiting'
        },
        on: {
          UPDATE_POSITION: {
            actions: (context, event) => {
              if (event.type === 'UPDATE_POSITION') {
                context.position = event.position;
              }
            }
          }
        }
      },
      exiting: {
        entry: (context) => {
          context.mode = 'exiting';
          context.target = GHOST_EXIT_POSITION;
          context.lastModeChange = Date.now();
        },
        on: {
          UPDATE_POSITION: {
            actions: [
              (context, event) => {
                if (event.type === 'UPDATE_POSITION') {
                  context.position = event.position;
                }
              },
              (context) => {
                if (Math.abs(context.position.x - GHOST_EXIT_POSITION.x) < 0.1 &&
                    Math.abs(context.position.y - GHOST_EXIT_POSITION.y) < 0.1) {
                  return send('EXIT_COMPLETE');
                }
              }
            ]
          },
          EXIT_COMPLETE: {
            target: 'scatter',
            actions: (context) => {
              context.isReleased = true;
              context.mode = 'scatter';
              context.target = context.scatterTarget;
            }
          }
        }
      },
      scatter: {
        entry: (context) => {
          context.mode = 'scatter';
          context.target = context.scatterTarget;
          context.lastModeChange = Date.now();
        },
        after: {
          7000: 'chase'
        },
        on: {
          POWER_PELLET: 'frightened',
          EATEN: 'eaten',
          UPDATE_CHASE_TARGET: {
            actions: (context, event) => {
              if (event.type === 'UPDATE_CHASE_TARGET') {
                context.target = event.target;
              }
            }
          }
        }
      },
      chase: {
        entry: (context) => {
          context.mode = 'chase';
          context.lastModeChange = Date.now();
        },
        after: {
          20000: 'scatter'
        },
        on: {
          POWER_PELLET: 'frightened',
          EATEN: 'eaten',
          UPDATE_CHASE_TARGET: {
            actions: (context, event) => {
              if (event.type === 'UPDATE_CHASE_TARGET') {
                context.target = event.target;
              }
            }
          }
        }
      },
      frightened: {
        entry: (context) => {
          context.mode = 'frightened';
          context.lastModeChange = Date.now();
        },
        after: {
          10000: 'chase'
        },
        on: {
          EATEN: 'eaten',
          UPDATE_CHASE_TARGET: {
            actions: (context, event) => {
              if (event.type === 'UPDATE_CHASE_TARGET') {
                context.target = event.target;
              }
            }
          }
        }
      },
      eaten: {
        entry: (context) => {
          context.mode = 'eaten';
          context.isReleased = false;
          context.lastModeChange = Date.now();
        },
        after: {
          5000: 'house'
        },
        on: {
          UPDATE_CHASE_TARGET: {
            actions: (context, event) => {
              if (event.type === 'UPDATE_CHASE_TARGET') {
                context.target = event.target;
              }
            }
          }
        }
      }
    }
  };

  return createMachine(config, {
    delays: {
      SPAWN_DELAY: () => spawnDelay
    }
  });
}; 