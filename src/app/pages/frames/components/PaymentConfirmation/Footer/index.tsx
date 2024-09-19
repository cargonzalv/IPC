import { FooterWhiteLabel } from "app/pages/frames/components/FooterWhiteLabel";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const Footer = (): JSX.Element => {
  const themeContext: any = useContext(ThemeContext);
  const { enableWhiteLabel } = themeContext;

  return <>{enableWhiteLabel && <FooterWhiteLabel />}</>;
};
