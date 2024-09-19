import { ButtonProps } from "@chakra-ui/button";

export interface IButton extends ButtonProps {
  children?: any;
  className?: string;
  disabled?: boolean;
  emoji?: any;
  icon?: string;
  iconRight?: boolean;
  isLoading?: boolean;
  onClick?: any;
  primary?: boolean;
  secondary?: boolean;
  type?: string;
  size?: string;
  fullWidth?: boolean;
}
