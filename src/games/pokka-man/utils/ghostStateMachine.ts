import { createMachine, assign, EventObject } from 'xstate';

export type GhostMode = 'scatter' | 'chase' | 'frightened' | 'eaten' | 'house';

interface Position {
  x: number;
  y: number;
}

interface GhostContext {
  mode: GhostMode;
  scatterTarget: Position;
  chaseTarget: Position;
  currentTarget: Position;
  frightenedTimer: number;
  releaseTimer: number;
  isReleased: boolean;
}

interface UpdateChaseTargetEvent extends EventObject {
  type: 'UPDATE_CHASE_TARGET';
  target: Position;
}

type GhostEvent = 
  | { type: 'POWER_PELLET_EATEN' }
  | { type: 'GHOST_EATEN' }
  | { type: 'RELEASE' }
  | UpdateChaseTargetEvent;

const SCATTER_DURATION = 7000;
const CHASE_DURATION = 20000;
const FRIGHTENED_DURATION = 8000;
const EATEN_RETURN_DURATION = 5000;
const FLASH_WARNING_DURATION = 2000;

export const createGhostStateMachine = (
  scatterTarget: Position,
  releaseDelay: number = 0
) => {
  return createMachine<GhostContext, GhostEvent>({
    id: 'ghost',
    initial: releaseDelay > 0 ? 'house' : 'scatter',
    context: {
      mode: releaseDelay > 0 ? 'house' : 'scatter',
      scatterTarget,
      chaseTarget: { x: 0, y: 0 },
      currentTarget: scatterTarget,
      frightenedTimer: 0,
      releaseTimer: releaseDelay,
      isReleased: releaseDelay === 0
    },
    states: {
      house: {
        entry: assign({
          mode: 'house',
          isReleased: false
        }),
        after: {
          DELAY: {
            target: 'scatter',
            actions: assign({
              isReleased: true
            })
          }
        },
        on: {
          RELEASE: 'scatter'
        }
      },
      scatter: {
        entry: assign({
          mode: 'scatter',
          currentTarget: (context) => context.scatterTarget
        }),
        after: {
          [SCATTER_DURATION]: 'chase'
        },
        on: {
          POWER_PELLET_EATEN: 'frightened',
          GHOST_EATEN: 'eaten'
        }
      },
      chase: {
        entry: assign({
          mode: 'chase',
          currentTarget: (context) => context.chaseTarget
        }),
        after: {
          [CHASE_DURATION]: 'scatter'
        },
        on: {
          POWER_PELLET_EATEN: 'frightened',
          GHOST_EATEN: 'eaten'
        }
      },
      frightened: {
        entry: assign({
          mode: 'frightened',
          frightenedTimer: FRIGHTENED_DURATION
        }),
        after: {
          [FRIGHTENED_DURATION - FLASH_WARNING_DURATION]: {
            actions: assign({
              frightenedTimer: (context) => context.frightenedTimer - FLASH_WARNING_DURATION
            })
          },
          [FRIGHTENED_DURATION]: 'scatter'
        },
        on: {
          GHOST_EATEN: 'eaten',
          POWER_PELLET_EATEN: {
            target: 'frightened',
            actions: assign({
              frightenedTimer: FRIGHTENED_DURATION
            })
          }
        }
      },
      eaten: {
        entry: assign({
          mode: 'eaten'
        }),
        after: {
          [EATEN_RETURN_DURATION]: 'house'
        }
      }
    },
    on: {
      UPDATE_CHASE_TARGET: {
        actions: assign({
          chaseTarget: (_, event: UpdateChaseTargetEvent) => event.target,
          currentTarget: (context, event: UpdateChaseTargetEvent) => 
            context.mode === 'chase' ? event.target : context.currentTarget
        })
      }
    }
  });
}; 