import Skeleton from 'react-loading-skeleton';

import type { FC } from 'react';
import type { PropsWithChildren } from 'react';

export const BaseSkeletonWrapper: FC<PropsWithChildren> = ({ children }) => (
  <>
    <div
      data-testid='payment-options-skeleton'
      style={{
        height: '230px',
        padding: '72px 35px 35px',
        marginBottom: '12px',
        borderBottom: 'solid rgba(0, 0, 0, 0.15) 1px',
      }}
    >
      <Skeleton height={16} width={260} style={{ marginTop: '50px', marginBottom: '21px' }} />
      <div style={{ display: 'flex', flexDirection: 'row', padding: '0', marginBottom: '50px' }}>
        <Skeleton height={16} width={109} style={{ marginRight: '8px' }} />
        <Skeleton height={16} width={30} style={{ marginRight: '8px' }} />
        <Skeleton height={16} width={89} style={{ marginRight: '8px' }} />
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '12px' }}>
      {children}
      <Skeleton height={12} width={230} style={{ marginTop: '2px' }} />
      <Skeleton height={20} width={193} style={{ marginTop: '2px' }} />
    </div>
  </>
);
