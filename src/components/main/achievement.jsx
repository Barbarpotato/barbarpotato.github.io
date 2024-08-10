import React, { Fragment } from 'react'
import { Flex, Text, Box, Heading, Button, Center } from '@chakra-ui/react';
import useWindowSize from '../../hooks/useWindowSize';
import { primaryFontColor } from '../../theme/globalTheme';
import { motion } from 'framer-motion'

function Achievement() {

    const { width } = useWindowSize();

    return (
        <Fragment>
            {
                width > 768 && (
                    <Fragment>
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                        >

                            <Box textAlign={'center'} my={5}>
                                <Heading id='aboutme' opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                                </span>My Achievements<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                                </Heading>
                            </Box>

                            <Center>

                                <Flex width={width < 992 ? '100%' : '90%'} height={width < 992 ? "50vh" : "70vh"} marginTop={'50px'} px={20} justifyContent={'center'} textAlign={'center'}>
                                    <Box height={"100%"} width={'15%'} id='flex#1'>

                                        <Box margin={2} height={"10%"}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </Box>

                                        <Box margin={2} height={"80%"} bg='#feca6e' padding={2} borderRadius={10}>
                                            <Text>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur quisquam quam architecto molestias labore.
                                            </Text>
                                        </Box>

                                        <Box textAlign={'center'} padd={2} height={"10%"}>
                                            <Button fontWeight={'bold'} width={'100%'} boxShadow={'2xl'} fontSize={'lg'} borderRadius={10} colorScheme={'purple'}>Take a look</Button>
                                        </Box>

                                    </Box>


                                    <Box width={'85%'}>
                                        <Flex w={'100%'} h={'100%'} flexDir={'column'}>
                                            <Box height={'50%'} id='flex#2'>
                                                <Flex height={'100%'}>

                                                    <Box margin={2} borderRadius={10} w={'50%'} bg='#00b795'>
                                                        Image Title
                                                    </Box>

                                                    <Box w={'50%'}>
                                                        <Flex height={'100%'} flexDir={'column'}>

                                                            <Box h={'30%'}>
                                                                this is a multi purpose grid. it fits for portofolio
                                                            </Box>

                                                            <Box margin={2} h={'70%'}>
                                                                <Flex height={'100%'}>
                                                                    <Box marginRight={2} borderRadius={10} w={'50%'} h={'100%'} bg={'#a29cfe'}>
                                                                        empty
                                                                    </Box>
                                                                    <Box borderRadius={10} marginLeft={2} w={'50%'} h={'100%'} bg={'#0f8cff'}>
                                                                    </Box>
                                                                </Flex>
                                                            </Box>

                                                        </Flex>

                                                    </Box>
                                                </Flex>

                                            </Box>


                                            <Box height={'50%'} id='flex#3'>

                                                <Flex height={'100%'}>
                                                    <Box margin={2} borderRadius={10} width={"25%"} height={"90%"} backgroundColor={"#e94394"}>
                                                        test
                                                    </Box>
                                                    <Box margin={2} marginRight={2} borderRadius={10} width={"50%"} height={"100%"} backgroundColor={'#6c5ce8'}>
                                                        test
                                                    </Box>
                                                    <Box margin={2} marginLeft={2} borderRadius={10} width={"25%"} height={"60%"} bg={'#fe7875'}>
                                                        test
                                                    </Box>
                                                </Flex>


                                            </Box>


                                        </Flex>



                                    </Box>

                                </Flex>
                            </Center>

                        </motion.div>
                    </Fragment >

                )
            }
        </Fragment >
    )
}

export default Achievement