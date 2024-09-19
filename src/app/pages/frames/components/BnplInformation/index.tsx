import { useTranslation } from "react-i18next";
import { truncateString } from "app/util/strings";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { ParagraphMethod } from "../styled-components/ParagraphMerchant";
import { useConfigContext } from "app/context/ConfigContext";

const T_ROOT = "bnplInformation";

const BnplInformation = () => {
  const { t } = useTranslation();

  const THEME_CONTEXT: any = useContext(ThemeContext);
  const { font } = THEME_CONTEXT.colors;

  const { iframe = { options: {} } } = useConfigContext();
  const bnplText: string =
    iframe.options?.paymentMethodInformation?.bnplText ?? "";

  return (
    <ParagraphMethod color={font}>
      {bnplText ? truncateString(bnplText) : t(`${T_ROOT}.text`)}
    </ParagraphMethod>
  );
};

export default BnplInformation;
