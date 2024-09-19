import { IconProps } from './icon';

const IconCard = (props: IconProps) => {
  const { stroke = '#585987' } = props;

  return (
    <svg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M19.9961 1.25H1.99609C1.58188 1.25 1.24609 1.58579 1.24609 2V14C1.24609 14.4142 1.58188 14.75 1.99609 14.75H19.9961C20.4103 14.75 20.7461 14.4142 20.7461 14V2C20.7461 1.58579 20.4103 1.25 19.9961 1.25Z'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M14.748 11.75H17.748' stroke={stroke} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M10.251 11.75H11.751' stroke={stroke} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M1.24609 5.08496H20.7461' stroke={stroke} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default IconCard;
