import { createMachine, assign, EventObject } from 'xstate';

export type GhostMode = 'scatter' | 'chase' | 'frightened' | 'eaten';

interface GhostContext {
  mode: GhostMode;
  scatterTarget: { x: number; y: number };
  chaseTarget: { x: number; y: number };
  currentTarget: { x: number; y: number };
}

interface UpdateChaseTargetEvent extends EventObject {
  type: 'UPDATE_CHASE_TARGET';
  target: { x: number; y: number };
}

type GhostEvent = 
  | { type: 'POWER_PELLET_EATEN' }
  | { type: 'GHOST_EATEN' }
  | UpdateChaseTargetEvent;

export const createGhostStateMachine = (scatterTarget: { x: number; y: number }) => {
  return createMachine<GhostContext, GhostEvent>({
    id: 'ghost',
    initial: 'scatter',
    context: {
      mode: 'scatter',
      scatterTarget,
      chaseTarget: { x: 0, y: 0 },
      currentTarget: scatterTarget
    },
    states: {
      scatter: {
        entry: assign({
          mode: 'scatter',
          currentTarget: (context: GhostContext) => context.scatterTarget
        }),
        after: {
          7000: 'chase'
        }
      },
      chase: {
        entry: assign({
          mode: 'chase',
          currentTarget: (context: GhostContext) => context.chaseTarget
        }),
        after: {
          20000: 'scatter'
        }
      },
      frightened: {
        entry: assign({
          mode: 'frightened'
        }),
        after: {
          8000: 'scatter'
        }
      },
      eaten: {
        entry: assign({
          mode: 'eaten'
        }),
        after: {
          5000: 'scatter'
        }
      }
    },
    on: {
      POWER_PELLET_EATEN: 'frightened',
      GHOST_EATEN: 'eaten',
      UPDATE_CHASE_TARGET: {
        actions: assign({
          chaseTarget: (_, event: UpdateChaseTargetEvent) => event.target,
          currentTarget: (context: GhostContext, event: UpdateChaseTargetEvent) => 
            context.mode === 'chase' ? event.target : context.currentTarget
        })
      }
    }
  });
}; 