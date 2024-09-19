import { IDescriptionProps } from './interface';

const Description = ({ text }: IDescriptionProps) => (
  <p className="description">
    <span>{text}</span>
  </p>
);

export default Description;
