import { Box, Flex, Heading, Image, Button, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { Fragment, useMemo } from 'react'
import { primaryFontColor } from '../../theme/globalTheme'

function About({ aboutMe, width }) {

    const avatarUrl = useMemo(() => "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/blog-content%2FAvatar.webp?alt=media&token=4eac6e1c-e936-41c5-b1e6-320444542537", []);
    const resumeUrl = useMemo(() => "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=e1d899ea-4b26-4449-b446-8d4374a2b07a", []);

    const textStyle = useMemo(() => ({
        marginBottom: '10px', textAlign: 'justify', whiteSpace: 'pre-wrap',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica',
        fontSize: '20px'
    }), []);

    return (
        <Fragment>
            {/* // ** DESKTOP SCREEN SIZE  */}
            {width >= 1280 && (
                <Flex py={20} px={20} alignItems={'center'}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}>
                        <Box pl={20}  >
                            <Image alt='Darmawan Avatar' className='avatar' src={avatarUrl} />
                        </Box>
                    </motion.div >

                    <Box pt={5} pl={5} w={'50%'} justifyContent={'center'} mx={10} color={primaryFontColor}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}>
                            <Box my={5}>
                                <Heading id='aboutme' opacity={0.8} color={primaryFontColor}><span>{"<"}
                                </span>About Me<span>{'>'}</span>
                                </Heading>
                            </Box>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}>
                            <pre style={textStyle}>
                                {aboutMe}
                            </pre>
                            <Button
                                as="a"
                                href={resumeUrl}
                                download="Darmawan CV"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Download my resume"
                                color="white"
                                fontWeight="bold"
                                variant="outline"
                                colorScheme="purple"
                            >
                                See My Resume
                            </Button>
                        </motion.div>
                    </Box>
                </Flex >
            )}

            {/* // ** TABLET SCREEN SIZE  */}
            {width > 768 && width < 1280 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                    whileInView={{ opacity: 1 }}>
                    <Box pt={20} w={'100%'} position={'relative'} className='hero-medium'>
                        <Center>
                            <Image alt='Darmawan Avatar' className='mobile-avatar' w={'500px'} height={'450px'} src={avatarUrl} />
                        </Center>

                        <Box mt={20} justifyContent={'center'} mx={10} color={primaryFontColor}>
                            <Heading id='aboutme' my={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span>{"<"}
                            </span>About Me<span>{'>'}</span>
                            </Heading>

                            <Box mx={12}>
                                <pre style={textStyle}>
                                    {aboutMe}
                                </pre>
                                <Button
                                    as="a"
                                    href={resumeUrl}
                                    download="Darmawan CV"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Download my resume"
                                    color="white"
                                    fontWeight="bold"
                                    variant="outline"
                                    colorScheme="purple"
                                >
                                    See My Resume
                                </Button>
                            </Box>

                        </Box>
                    </Box >
                </motion.div>
            )
            }

            {/* // ** MOBILE SCREEN SIZE  */}
            {
                width <= 768 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                        whileInView={{ opacity: 1 }}>
                        <Box pt={5} w={'100%'} position={'relative'}>
                            <Center>
                                <Image alt='Darmawan Avatar' className='mobile-avatar' w={'300px'} height={'300px'} src={avatarUrl} />
                            </Center>
                            <Box mt={20} justifyContent={'center'} mx={10} color={primaryFontColor}>
                                <Heading id='aboutme' mb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span>{"<"}
                                </span>About Me<span>{'>'}</span>
                                </Heading>

                                <Box mx={2}>
                                    <pre style={textStyle}>
                                        {aboutMe}
                                    </pre>

                                    <Button
                                        as="a"
                                        href={resumeUrl}
                                        download="Darmawan CV"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Download my resume"
                                        color="white"
                                        fontWeight="bold"
                                        variant="outline"
                                        colorScheme="purple"
                                    >
                                        See My Resume
                                    </Button>

                                </Box>

                            </Box>
                        </Box >
                    </motion.div>
                )
            }
        </Fragment >
    )
}

export default About