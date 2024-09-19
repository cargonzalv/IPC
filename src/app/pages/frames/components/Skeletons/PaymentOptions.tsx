import { BaseSkeletonWrapper } from 'app/pages/frames/components/Skeletons/BaseWrapper';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const PaymentsOptionsSkeleton = () => (
  <BaseSkeletonWrapper>
    <div
      style={{
        width: '350px',
        borderRadius: '8px',
        boxShadow: '-14px 23px 34px -10px rgb(0 0 0 / 8%), 3px -3px 20px 1px rgb(255 255 255 / 88%)',
        padding: '20px',
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Skeleton style={{ marginTop: '16px' }} height={18} width={215} />
      <Skeleton style={{ marginTop: '16px' }} height={16} width={51} />
    </div>

    <div
      style={{
        width: '350px',
        borderRadius: '8px',
        boxShadow: '-14px 23px 34px -10px rgb(0 0 0 / 8%), 3px -3px 20px 1px rgb(255 255 255 / 88%)',
        padding: '20px',
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Skeleton style={{ marginTop: '16px' }} height={18} width={215} />
      <Skeleton style={{ marginTop: '16px' }} height={16} width={51} />
    </div>

    <div
      style={{
        width: '350px',
        borderRadius: '8px',
        boxShadow: '-14px 23px 34px -10px rgb(0 0 0 / 8%), 3px -3px 20px 1px rgb(255 255 255 / 88%)',
        padding: '20px',
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Skeleton style={{ marginTop: '16px' }} height={18} width={215} />
      <Skeleton style={{ marginTop: '16px' }} height={16} width={51} />
    </div>

    <div
      style={{
        width: '350px',
        borderRadius: '8px',
        boxShadow: '-14px 23px 34px -10px rgb(0 0 0 / 8%), 3px -3px 20px 1px rgb(255 255 255 / 88%)',
        padding: '20px',
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Skeleton style={{ marginTop: '16px' }} height={18} width={215} />
      <Skeleton style={{ marginTop: '16px' }} height={16} width={51} />
    </div>
  </BaseSkeletonWrapper>
);
