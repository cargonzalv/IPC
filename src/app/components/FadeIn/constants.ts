export const ANIMATION_DURATION = 250;
export const UNMOUNTED = 'unmounted';
export const EXITED = 'exited';
export const ENTERING = 'entering';
export const ENTERED = 'entered';
export const EXITING = 'exiting';

type Transition = Record<string, string>;

type FadeStateMachine = Record<string, Transition>;

export const fadeStateMachine: FadeStateMachine = {
  [UNMOUNTED]: {
    [ENTERING]: ENTERED,
    [EXITING]: EXITED,
  },
  [EXITED]: {
    [ENTERING]: ENTERING,
  },
  [ENTERING]: {
    [ENTERED]: ENTERED,
    [EXITING]: EXITING,
  },
  [ENTERED]: {
    [EXITING]: EXITING,
  },
  [EXITING]: {
    [EXITED]: UNMOUNTED,
  },
};

export const transitionStyles: Record<string, { opacity: number }> = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
};
