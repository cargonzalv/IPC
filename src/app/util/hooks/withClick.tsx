import { ComponentType, FC } from 'react';

export interface WithClickProps {
  onClick?(): void;
}

export const withClick = function <T>(Component: ComponentType<T>, handleClick: () => void): FC<T> {
  return ({ ...props }: T) => <Component {...props} onClick={handleClick} />;
};
