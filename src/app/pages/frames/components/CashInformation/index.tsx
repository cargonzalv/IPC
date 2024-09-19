import { truncateString } from "app/util/strings";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import FontColor from "../styled-components/FontColor";
import { ParagraphMethod } from "../styled-components/ParagraphMerchant";

import { useConfigContext } from "app/context/ConfigContext";


const CashInformation = () => {
  const theme: any = useContext(ThemeContext);
  const { font } = theme.colors;

  const { iframe = { options: {} } } = useConfigContext();
  const cashTextRequested: string =
    iframe.options?.paymentMethodInformation?.cashText ?? "";

  return (
    <FontColor className="CashInformation">
      {cashTextRequested && (
        <ParagraphMethod color={font}>
          {truncateString(cashTextRequested)}
        </ParagraphMethod>
      )}
    </FontColor>
  );
};

export default CashInformation;
