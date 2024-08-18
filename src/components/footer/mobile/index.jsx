import { Fragment } from 'react'
import { primaryFontColor } from '../../../theme/globalTheme';
import { Box, Spacer, Divider, Text } from '@chakra-ui/react'

function Footer({ year }) {
    return (
        <Fragment>
            <Box mx={10} my={5}>
                <Divider colorScheme='purple' backgroundColor={'#bd93f9'} height={'2px'} orientation='horizontal' />
            </Box>
            <Spacer />
            <Text py={5} textAlign={'center'} fontSize={'sm'} color={primaryFontColor}>© 2023 - {year} All Rights Reserved</Text>
        </Fragment >
    )
}

export default Footer