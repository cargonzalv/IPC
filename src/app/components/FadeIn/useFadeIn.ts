import { useState, useEffect } from 'react';
import {
  UNMOUNTED,
  ENTERING,
  ENTERED,
  EXITING,
  fadeStateMachine,
  transitionStyles,
  ANIMATION_DURATION,
} from './constants';

export const useFadeInOut = (show: boolean, duration = ANIMATION_DURATION) => {
  const [status, setStatus] = useState(UNMOUNTED);

  useEffect(() => {
    if (show) {
      setStatus(ENTERING);
      const timer = setTimeout(() => {
        setStatus(ENTERED);
      }, 0);

      return () => clearTimeout(timer);
    } else {
      setStatus(EXITING);
      const timer = setTimeout(() => {
        setStatus(UNMOUNTED);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show]);

  useEffect(() => {
    const nextState = fadeStateMachine[status]?.[show ? ENTERING : EXITING];
    if (nextState) {
      setStatus(nextState);
    }
  }, [show, status]);

  return {
    status,
    fadeInOutStyle: {
      transition: `opacity ${duration}ms ease-in-out`,
      ...transitionStyles[status],
    },
  };
};
