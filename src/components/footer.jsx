import React, { Fragment, useEffect, useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaArrowAltCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { secondaryColor, primaryFontColor } from '../theme/globalTheme'
import { Flex, Heading, Box, Spacer, Divider, Text, Center } from '@chakra-ui/react'
import useWindowSize from '../hooks/useWindowSize';
import { useLocation } from 'react-router-dom';

function Footer() {

    const location = useLocation()

    const { width } = useWindowSize()

    const [year, setYear] = useState();

    useEffect(() => {
        const currentDate = new Date();
        setYear(currentDate.getFullYear());
    }, [])

    return (
        <Fragment>
            {/* // ** DESKTOP AND TABLET SCREEN SIZE  */}
            {width >= 768 && (
                <Fragment>
                    <Flex alignItems={'center'} pt={100} mx={10}>
                        <Box>
                            <Heading fontSize={'2xl'} color={primaryFontColor} size='md'><span style={{ color: secondaryColor, fontWeight: 'bold' }}>🚀D</span>armawan</Heading>
                        </Box>
                        <Spacer />
                        <Flex>
                            <IconContext.Provider value={{ size: "2em" }}>
                                <Box mx={1}>
                                    <a target='_blank' href='https://www.instagram.com/darmajr94?igsh=OGgwNTRnaGFxeTY1'>
                                        <FaInstagram className='social-icon' />
                                    </a>
                                </Box>
                                <Box mx={1}>
                                    <a target='_blank' href='https://www.linkedin.com/in/darmawan-jr-b16135220/'>
                                        <FaLinkedin className='social-icon' />
                                    </a>
                                </Box>
                                <Box mx={1}>
                                    <a target='_blank' href='https://github.com/Barbarpotato'>
                                        <FaGithub className='social-icon' />
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
                </Fragment>
            )
            }

            {/* // ** MOBILE SCREEN SIZE  */}
            {
                width < 768 && (
                    <Fragment>
                        <Spacer />
                        <Box mx={10} my={5}>
                            <Divider colorScheme='purple' backgroundColor={'#bd93f9'} height={'2px'} orientation='horizontal' />
                        </Box>
                        <Spacer />
                        <Text py={5} textAlign={'center'} fontSize={'sm'} color={primaryFontColor}>© 2023 - {year} All Rights Reserved</Text>
                    </Fragment>
                )
            }
        </Fragment >
    )
}

export default Footer