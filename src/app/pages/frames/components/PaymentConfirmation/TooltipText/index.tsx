import { Box, Text } from "@chakra-ui/layout";
import { ITooltipCustomText } from "app/pages/frames/components/PaymentConfirmation/TooltipText/interface";
import { useTranslation } from "react-i18next";

const TooltipText = ({
  textTitle,
  textDescription,
  subText,
}: ITooltipCustomText) => {
  const { t } = useTranslation();

  return (
    <Box width={56} padding={2}>
      <Text
        color="primary.800"
        fontWeight="600"
        textAlign="center"
        fontSize="md"
        marginBottom={3}
      >
        {t(`${textTitle}`)}
      </Text>
      <Text color="primary.600" fontWeight="400" fontSize="sm">
        {t(`${textDescription}`)}
      </Text>
      {subText && (
        <Text color="primary.600" fontWeight="400" fontSize="sm">
          {t(`${subText}`)}
        </Text>
      )}
    </Box>
  );
};

export default TooltipText;
