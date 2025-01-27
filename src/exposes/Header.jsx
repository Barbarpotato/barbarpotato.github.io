// Core Modules
import { memo } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

function Header() {


    // Define colors
    const primaryFontColor = '#faf9ff';
    const secondaryColor = '#bd93f9';

    return (
        <Flex
            id="navigation"
            p={{ base: 2, md: 10 }} // Responsive padding
            alignItems="center"
            gap={2}
        >
            {/* Logo Section */}
            <Flex p={2}>
                <Heading
                    fontSize="2xl"
                    color={primaryFontColor}
                >
                    <span style={{ color: secondaryColor, fontWeight: 'bold' }}>
                        🚀D
                    </span>
                    armawan
                </Heading>
            </Flex>
        </Flex>
    );
}

export default memo(Header)