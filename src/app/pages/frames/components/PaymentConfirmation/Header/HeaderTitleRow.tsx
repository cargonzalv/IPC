import { Text } from '@chakra-ui/layout';


export interface HeaderTitleRowProps {
  title: string;
  formatedAmount: string;
}

export const HeaderTitleRow = ({ formatedAmount, title }: HeaderTitleRowProps) => {
  return (
    <div>
      <Text fontSize='sm' fontWeight='600' lineHeight='8' textTransform='uppercase'>
        {title}
      </Text>
      <Text fontSize='2xl' fontWeight='600' lineHeight='8' textTransform='uppercase'>
        {formatedAmount}
      </Text>
    </div>
  );
};
