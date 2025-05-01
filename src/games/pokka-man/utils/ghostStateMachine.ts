import { createMachine, interpret } from 'xstate';

export type GhostMode = 'chase' | 'scatter' | 'frightened' | 'eaten';

interface GhostStateContext {
  mode: GhostMode;
  target: { x: number; y: number };
  scatterTarget: { x: number; y: number };
  lastModeChange: number;
}

export const createGhostStateMachine = (scatterTarget: { x: number; y: number }) => {
  return createMachine<GhostStateContext>({
    id: 'ghost',
    initial: 'scatter',
    context: {
      mode: 'scatter',
      target: scatterTarget,
      scatterTarget,
      lastModeChange: Date.now()
    },
    states: {
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
              // Store the target but don't change mode
              context.target = event.target;
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
              context.target = event.target;
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
              context.target = event.target;
            }
          }
        }
      },
      eaten: {
        entry: (context) => {
          context.mode = 'eaten';
          context.lastModeChange = Date.now();
        },
        after: {
          5000: 'scatter'
        },
        on: {
          UPDATE_CHASE_TARGET: {
            actions: (context, event) => {
              context.target = event.target;
            }
          }
        }
      }
    }
  });
}; 