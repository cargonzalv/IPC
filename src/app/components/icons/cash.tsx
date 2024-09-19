import { IconProps } from './icon';

const IconCash = (props: IconProps) => {
  const { fill = '#8D8FBA', stroke = '#585987' } = props;

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        opacity='0.2'
        d='M9.00018 11.25C13.1423 11.25 16.5002 9.73896 16.5002 7.875C16.5002 6.01104 13.1423 4.5 9.00018 4.5C4.85805 4.5 1.50018 6.01104 1.50018 7.875C1.50018 9.73896 4.85805 11.25 9.00018 11.25Z'
        fill={fill}
      />
      <path
        opacity='0.2'
        d='M16.498 9.06445C19.9199 9.3832 22.498 10.7426 22.498 12.3738C22.498 14.2395 19.1418 15.7488 14.998 15.7488C13.1605 15.7488 11.473 15.4488 10.1699 14.9613C13.7605 14.7082 16.498 13.3113 16.498 11.6238V9.06445Z'
        fill={fill}
      />
      <path
        d='M9.00018 11.25C13.1423 11.25 16.5002 9.73896 16.5002 7.875C16.5002 6.01104 13.1423 4.5 9.00018 4.5C4.85805 4.5 1.50018 6.01104 1.50018 7.875C1.50018 9.73896 4.85805 11.25 9.00018 11.25Z'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.50018 7.875V11.625C1.50018 13.4906 4.85643 15 9.00018 15C13.1439 15 16.5002 13.4906 16.5002 11.625V7.875'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M6.00018 10.9688V14.7188' stroke={stroke} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M16.498 9.06445C19.9199 9.3832 22.498 10.7426 22.498 12.3738C22.498 14.2395 19.1418 15.7488 14.998 15.7488C13.1605 15.7488 11.473 15.4488 10.1699 14.9613'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.50018 14.9344V16.125C7.50018 17.9906 10.8564 19.5 15.0002 19.5C19.1439 19.5 22.5002 17.9906 22.5002 16.125V12.375'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M17.998 15.4688V19.2188' stroke={stroke} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M12.002 10.9688V19.2188' stroke={stroke} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default IconCash;
