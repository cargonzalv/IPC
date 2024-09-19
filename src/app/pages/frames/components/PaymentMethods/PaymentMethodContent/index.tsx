import Background from 'app/pages/frames/components/styled-components/Background';
import { PropsWithChildren } from 'react';

export const PaymentMethodContent = ({ children }: PropsWithChildren): JSX.Element => (
  <Background className='PaymentMethodContent'>{children}</Background>
);
