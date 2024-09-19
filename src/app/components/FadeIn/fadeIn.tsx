import React, { PropsWithChildren } from 'react';
import { useFadeInOut } from './useFadeIn';
import { ANIMATION_DURATION, UNMOUNTED } from './constants';

interface IFadeInProps {
  show?: boolean;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeIn = ({
  children,
  duration = ANIMATION_DURATION,
  className,
  style,
  show = true,
}: PropsWithChildren<IFadeInProps>) => {
  const { status, fadeInOutStyle } = useFadeInOut(show, duration);

  if (status === UNMOUNTED) {
    return null;
  }

  return (
    <div className={className} style={{ ...style, ...fadeInOutStyle }}>
      {children}
    </div>
  );
};

export default FadeIn;
