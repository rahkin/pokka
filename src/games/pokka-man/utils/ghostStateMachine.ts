import { createMachine, MachineConfig } from 'xstate';
import { GHOST_EXIT_POSITION } from './gameConstants';

export type GhostMode = 'chase' | 'scatter' | 'frightened' | 'eaten' | 'house';

interface GhostStateContext {
  mode: GhostMode;
  target: { x: number; y: number };
  scatterTarget: { x: number; y: number };
  lastModeChange: number;
  isReleased: boolean;
}

interface GhostStateSchema {
  states: {
    house: {};
    scatter: {};
    chase: {};
    frightened: {};
    eaten: {};
  };
}

type GhostEvent = { type: 'POWER_PELLET' } | { type: 'EATEN' } | { type: 'UPDATE_CHASE_TARGET', target: { x: number; y: number } };

export const createGhostStateMachine = (scatterTarget: { x: number; y: number }, spawnDelay: number) => {
  const config: MachineConfig<GhostStateContext, GhostStateSchema, GhostEvent> = {
    id: 'ghost',
    initial: 'house',
    context: {
      mode: 'house',
      target: GHOST_EXIT_POSITION,
      scatterTarget,
      lastModeChange: Date.now(),
      isReleased: false
    },
    states: {
      house: {
        entry: (context) => {
          context.mode = 'house';
          context.target = GHOST_EXIT_POSITION;
          context.isReleased = false;
          context.lastModeChange = Date.now();
        },
        after: {
          SPAWN_DELAY: {
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
          20000: {
            target: 'scatter',
            actions: (context) => {
              context.target = context.scatterTarget;
            }
          }
        },
        on: {
          POWER_PELLET: {
            target: 'frightened',
            actions: (context) => {
              context.lastModeChange = Date.now();
            }
          },
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