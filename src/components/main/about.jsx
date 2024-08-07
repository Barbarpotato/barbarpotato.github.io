import { Box, Flex, Heading, Image, Text, Button, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { Fragment } from 'react'
import { primaryFontColor } from '../../theme/globalTheme'
import useWindowSize from '../../hooks/useWindowSize'
import { useAboutme } from '../../api/hecate'
import Loading from '../loading'

function About() {

    const { width } = useWindowSize();

    const { data: aboutMe, isLoading } = useAboutme();

    if (isLoading) return <Loading />

    return (
        <Fragment>
            {/* // ** DESKTOP SCREEN SIZE  */}
            {width >= 1280 && (
                <Flex py={20} px={20} alignItems={'center'}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}>
                        <Box pl={20}  >
                            <Image className='avatar' src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/blog-content%2FAvatar.png?alt=media&token=ed8991ba-7f53-423a-8eb9-baa94dd4d160"} />
                        </Box>
                    </motion.div >

                    <Box pt={5} pl={5} w={'50%'} justifyContent={'center'} mx={10} color={primaryFontColor}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}>
                            <Box my={5}>
                                <Heading id='aboutme' opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                                </span>About Me<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                                </Heading>
                            </Box>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}>
                            <pre style={{
                                marginBottom: '10px', textAlign: 'justify', whiteSpace: 'pre-wrap',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica',
                                fontSize: '20px'
                            }}>
                                {aboutMe}
                            </pre>
                            <Button fontWeight={'bold'} colorScheme='purple' borderRadius={'xl'} color={'black'}>
                                <a
                                    href="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=e1d899ea-4b26-4449-b446-8d4374a2b07a"
                                    download="Darmawan CV" target='_blank'>
                                    My Resume
                                </a>
                            </Button>
                        </motion.div>
                    </Box>
                </Flex >
            )}

            {/* // ** TABLET SCREEN SIZE  */}
            {width > 768 && width < 1280 && (
                <Box pt={20} w={'100%'} position={'relative'} className='hero-medium'>
                    <Center>
                        <Image className='mobile-avatar' w={'500px'} height={'450px'} src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/blog-content%2FAvatar.png?alt=media&token=ed8991ba-7f53-423a-8eb9-baa94dd4d160"} />
                    </Center>

                    <Box mt={20} justifyContent={'center'} mx={10} color={primaryFontColor}>
                        <Heading id='aboutme' my={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                        </span>About Me<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                        </Heading>

                        <Box mx={12}>
                            <pre style={{
                                marginBottom: '10px', textAlign: 'justify', whiteSpace: 'pre-wrap',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica',
                                fontSize: '20px'
                            }}>
                                {aboutMe}
                            </pre>
                            <Button fontWeight={'bold'} colorScheme='purple' borderRadius={'xl'} color={'black'}>
                                <a
                                    href="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=e1d899ea-4b26-4449-b446-8d4374a2b07a"
                                    download="Darmawan CV" target='_blank'>
                                    My Resume
                                </a>
                            </Button>
                        </Box>

                    </Box>
                </Box >
            )}

            {/* // ** MOBILE SCREEN SIZE  */}
            {width <= 768 && (
                <Box pt={5} w={'100%'} position={'relative'}>
                    <Center>
                        <Image className='mobile-avatar' w={'300px'} height={'300px'} src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/blog-content%2FAvatar.png?alt=media&token=ed8991ba-7f53-423a-8eb9-baa94dd4d160"} />
                    </Center>
                    <Box mt={20} justifyContent={'center'} mx={10} color={primaryFontColor}>
                        <Heading id='aboutme' mb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                        </span>About Me<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                        </Heading>

                        <Box mx={2}>
                            <pre style={{
                                marginBottom: '10px', textAlign: 'justify', whiteSpace: 'pre-wrap',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica',
                                fontSize: '20px'
                            }}>
                                {aboutMe}
                            </pre>
                            <Button fontWeight={'bold'} colorScheme='purple' borderRadius={'xl'} color={'black'}>
                                <a
                                    href="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=e1d899ea-4b26-4449-b446-8d4374a2b07a"
                                    download="Darmawan CV" target='_blank'>
                                    My Resume
                                </a>
                            </Button>
                        </Box>

                    </Box>
                </Box >
            )}
        </Fragment >
    )
}

export default About