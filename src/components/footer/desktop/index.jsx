import React, { Fragment } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { secondaryColor, primaryFontColor } from '../../../theme/globalTheme';
import { Flex, Heading, Box, Spacer, Divider, Text } from '@chakra-ui/react'

function Footer({ year }) {
    return (
        <Fragment>
            <Flex alignItems={'center'} pt={100} mx={10}>
                <Box>
                    <Heading fontSize={'2xl'} color={primaryFontColor} size='md'><span style={{ color: secondaryColor, fontWeight: 'bold' }}>🚀D</span>armawan</Heading>
                </Box>
                <Spacer />
                <Flex>
                    <IconContext.Provider value={{ size: "2em" }}>
                        <Box mx={1}>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/darmajr94?igsh=OGgwNTRnaGFxeTY1"
                                rel="noreferrer"
                                aria-label="Visit my Instagram profile"
                            >
                                <FaInstagram className="social-icon" />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/darmawan-jr-b16135220/"
                                rel="noreferrer"
                                aria-label="Visit my LinkedIn profile"
                            >
                                <FaLinkedin className="social-icon" />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a
                                target="_blank"
                                href="https://github.com/Barbarpotato"
                                rel="noreferrer"
                                aria-label="Visit my GitHub profile"
                            >
                                <FaGithub className="social-icon" />
                            </a>
                        </Box>
                    </IconContext.Provider>
                </Flex>
            </Flex>
            <Box mx={10} my={10}>
                <Divider colorScheme='purple' backgroundColor={'#bd93f9'} height={'2px'} orientation='horizontal' />
            </Box>
            <Flex pb={10} mx={10}>
                <Text fontSize={'sm'} color={primaryFontColor}>© 2023 - {year} All Rights Reserved</Text>
                <Spacer />
            </Flex>
        </Fragment >
    )
}

export default Footer