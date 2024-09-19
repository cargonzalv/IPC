import { Link, LinkProps } from '@chakra-ui/layout';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { FC } from 'react';


const BranchesToPayLink: FC<LinkProps> = ({ children, ...textProps }) => {
    const { colorPrimary } = useThemeConfig();

    return (
        <Link
            color={colorPrimary}
            fontSize='sm'
            fontWeight={600}
            href={import.meta.env.VITE_CONEKTA_MAPS_URLS}
            target='_blank'
            ml={1}
            {...textProps}
        >
            {children}
        </Link>
    )
}

export default BranchesToPayLink;