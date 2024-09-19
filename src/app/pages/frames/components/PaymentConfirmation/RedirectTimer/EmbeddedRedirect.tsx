import { Link, Text } from '@chakra-ui/layout';
import { Trans } from 'react-i18next';

interface EmbeddedRedirectProps {
  paymentMethod: string;
  urlRedirect: string;
}
export const EmbeddedRedirect = ({ paymentMethod, urlRedirect }: EmbeddedRedirectProps) => {
  return (
    <Text fontSize='sm' textAlign='center' fontWeight='400' lineHeight='8' color='primary.900'>
      <Trans i18nKey={`${paymentMethod}.success_subtitle`}>
        Puedes cerrar esta ventana o <Link href={urlRedirect}>volver al sitio.</Link>
      </Trans>
    </Text>
  );
};
