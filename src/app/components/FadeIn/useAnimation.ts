import { useState, useEffect } from 'react';
import { ANIMATION_DURATION } from '../FadeIn/constants';

export const useAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  const hideAndShowWithAnimation = (callback: () => void) => {
    setShowAnimation(false);
    setTimeout(() => {
      callback();
      setShowAnimation(true);
    }, ANIMATION_DURATION);
  };

  return { showAnimation, hideAndShowWithAnimation };
};
