import { Box, Flex, Heading, Image, Text, Button, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { Fragment } from 'react'
import { primaryFontColor } from '../../theme/globalTheme'
import useWindowSize from '../../hooks/useWindowSize'

function About() {

    const { width } = useWindowSize();

    return (
        <Fragment>
            {/* // ** DESKTOP SCREEN SIZE  */}
            {width >= 1280 && (
                <Flex py={20} px={20} >
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
                            <Box>
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
                            <Text textAlign={'justify'} py={4} fontSize={'xl'} fontWeight={'semibold'} color={primaryFontColor}>
                                Hello, called me Darma. I have currently working as a Software Engineer. My flexibility in adapting to changing technologies
                                and project demands makes me a valuable asset to development teams. Furthermore,
                                I am always eager to expand my knowledge and keep up with the latest trends in the software development world.
                            </Text>
                            <Text textAlign={'justify'} py={4} fontSize={'xl'} fontWeight={'semibold'} color={primaryFontColor}>
                                Additionally, I have a strong understanding of technical concepts such as system design, software testing, and project management.
                                I believe that good code quality, solid teamwork, and effective communication are key to success in software development.
                            </Text>
                            <Button fontWeight={'bold'} colorScheme='purple' borderRadius={'xl'} color={'black'}>
                                <a
                                    href="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=444c23eb-f434-4e8e-9f81-953134657a98"
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
                        <Image className='avatar' borderBottomRadius={'2xl'} w={'600px'} height={'450px'} src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/blog-content%2FAvatar.png?alt=media&token=ed8991ba-7f53-423a-8eb9-baa94dd4d160"} />
                    </Center>

                    <Box mt={20} justifyContent={'center'} mx={10} color={primaryFontColor}>
                        <Heading id='aboutme' my={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                        </span>About Me<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                        </Heading>

                        <Box mx={12}>
                            <Text fontSize={'xl'} fontWeight={'semibold'} color={primaryFontColor}>
                                Hello, called me Darma. I have currently working as a Software Engineer. My flexibility in adapting to changing technologies
                                and project demands makes me a valuable asset to development teams. Furthermore,
                                I am always eager to expand my knowledge and keep up with the latest trends in the software development world.
                            </Text>
                            <Text py={4} fontSize={'xl'} fontWeight={'semibold'} color={primaryFontColor}>
                                Additionally, I have a strong understanding of technical concepts such as system design, software testing, and project management.
                                I believe that good code quality, solid teamwork, and effective communication are key to success in software development.
                            </Text>
                            <Button fontWeight={'bold'} colorScheme='purple' borderRadius={'xl'} color={'black'}>
                                <a
                                    href="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=444c23eb-f434-4e8e-9f81-953134657a98"
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
                            <Text textAlign={'justify'} fontSize={'md'} fontWeight={'semibold'} color={primaryFontColor}>
                                Hello, called me Darma. I have currently working as a Software Engineer. My flexibility in adapting to changing technologies
                                and project demands makes me a valuable asset to development teams. Furthermore,
                                I am always eager to expand my knowledge and keep up with the latest trends in the software development world.
                            </Text>
                            <Text textAlign={'justify'} py={4} fontSize={'md'} fontWeight={'semibold'} color={primaryFontColor}>
                                Additionally, I have a strong understanding of technical concepts such as system design, software testing, and project management.
                                I believe that good code quality, solid teamwork, and effective communication are key to success in software development.
                            </Text>
                            <Button fontWeight={'bold'} colorScheme='purple' borderRadius={'xl'} color={'black'}>
                                <a
                                    href="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=444c23eb-f434-4e8e-9f81-953134657a98"
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