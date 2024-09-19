import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SelectedPaymentMethodForm = () => (
  <>
    <div style={{ padding: '15px' }}>
      <div
        style={{
          borderRadius: '20px',
          boxShadow: '0 1px 7px 0 rgb(0 0 0 / 20%)',
          padding: '12px',
          marginBlock: '30px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Skeleton style={{ marginTop: '16px' }} height={18} width={300} />
      </div>
    </div>
    <div style={{ backgroundColor: '#f9f9f9', padding: '32px 36px' }}>
      <Skeleton height={20} width={169} />
      <Skeleton height={32} style={{ marginTop: '20px' }} />
      <Skeleton height={50} style={{ marginTop: '24px' }} />
    </div>
  </>
);
