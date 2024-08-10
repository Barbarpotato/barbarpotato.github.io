import { Card, CardBody, Center, Divider, Flex, Heading, Image, Stack, Text, Box } from '@chakra-ui/react'
import { motion } from "framer-motion"
import React, { Fragment } from 'react'
import { primaryColor, primaryFontColor, ternaryColor } from '../../theme/globalTheme'
import useWindowSize from '../../hooks/useWindowSize'

function Project() {

    const { width } = useWindowSize()

    return (
        <Fragment>
            {/* // ** DESKTOP AND TABLET SCREEN SIZE  */}
            {width >= 1280 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}>
                    <Fragment>

                        <Heading id='myproject' my={20} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                        </span>My Projects<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                        </Heading>


                        <Flex justifyContent={'center'} marginInline={"15%"}>

                            <Box width={'70%'}>

                                <Flex width={"100%"}>

                                    <Card className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                        <CardBody>
                                            <Image
                                                borderWidth={10}
                                                borderBottomColor={ternaryColor}
                                                src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fworkfrom.jpg?alt=media&token=0fc026ab-f0c3-4df0-a492-0631ec42bc44"}
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading>Workfrom</Heading>
                                                <Text fontWeight={'bold'}>Instant Online Coworking Space Dashboard</Text>
                                                <Flex alignItems={'center'} >
                                                    <p style={{ width: "400px" }} align="center">
                                                        <a href="https://skillicons.dev">
                                                            <img src="https://skillicons.dev/icons?i=javascript,react,aws,fastapi,github,python,vite,nginx,cloudflare" />
                                                        </a>
                                                    </p>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>

                                    <Card className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                        <CardBody>
                                            <Image
                                                src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Froyale_progress.jpg?alt=media&token=e8e0bb41-7a07-4154-84b3-782790d5878c"}
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading>Royal Progress</Heading>
                                                <Text fontWeight={'bold'}>Landing Page & Appointment Schedule</Text>
                                                <Flex alignItems={'center'}>
                                                    <p style={{ width: "300px" }} align="center">
                                                        <a href="https://skillicons.dev">
                                                            <img src="https://skillicons.dev/icons?i=javascript,html,css,wordpress,github,figma,postman" />
                                                        </a>
                                                    </p>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Flex>

                                <Box width={"100%"}>

                                    <Card className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                        <CardBody>
                                            <Image
                                                src={'https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fsolopreneurs.jpg?alt=media&token=6de8e566-4cd6-4392-b3a4-05fe8f42d931'}
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading>Solopreneurs AI</Heading>
                                                <Text fontWeight={'bold'}>AI Cutting-edge Technology Tools Dashboard</Text>
                                                <Flex alignItems={'center'} >
                                                    <p style={{ width: "400px" }} align="center">
                                                        <a href="https://skillicons.dev">
                                                            <img src="https://skillicons.dev/icons?i=react,javascript,aws,fastapi,github,python,vite,nginx,cloudflare" />
                                                        </a>
                                                    </p>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>


                                <Box >
                                    <Card className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                        <CardBody>
                                            <Image
                                                src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Ftb-disease-prediction.png?alt=media&token=e38601b3-5c59-4bbe-af76-d2e663d363b7"}
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading>TBC Prediction Web App</Heading>
                                                <Text fontWeight={'bold'}>Tuberculosis Disease Prediction in Makassar City</Text>
                                                <Flex alignItems={'center'} >
                                                    <p style={{ width: "400px" }} align="center">
                                                        <a href="https://skillicons.dev">
                                                            <img src="https://skillicons.dev/icons?i=react,javascript,vitest,vite,fastapi,github,python,tensorflow," />
                                                        </a>
                                                    </p>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                            </Box>

                            <Box>

                                <Card className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW={'sm'}>
                                    <CardBody>
                                        <Image
                                            src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Ffeha.jpg?alt=media&token=c2202693-bfdf-4bf9-949d-3120695c2348"}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading>FEHA</Heading>
                                            <Text fontWeight={'bold'}>Cyber Risk Assessments Dashboard</Text>
                                            <Flex alignItems={'center'} >
                                                <p>
                                                    <a href="https://skillicons.dev">
                                                        <img width={'350px'} src="https://skillicons.dev/icons?i=javascript,react,flask,postgresql,github,python,vite,nginx,cloudflare" />
                                                    </a>
                                                </p>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>

                                <Card className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW={'sm'}>
                                    <CardBody>
                                        <Image
                                            src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fcerberry-project.png?alt=media&token=c3380e48-6525-4f86-83b7-91c6b410f209"}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading>Cerberry</Heading>
                                            <Text fontWeight={'bold'}>Blog Backend Services</Text>
                                            <Flex alignItems={'center'} >
                                                <p align="center">
                                                    <a href="https://skillicons.dev">
                                                        <img width={'350px'} src="https://skillicons.dev/icons?i=bootstrap,docker,python,flask,firebase,javascript,githubactions,github,vercel" />
                                                    </a>
                                                </p>

                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>

                                <Card className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW={'sm'}>
                                    <CardBody>
                                        <Image
                                            src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fhecate-project.png?alt=media&token=73b8cc1e-ea06-4896-993e-2563cbde4bab"}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading>Hecate</Heading>
                                            <Text fontWeight={'bold'}>Fullstack App Portofolio CMS</Text>
                                            <Flex alignItems={'center'} >
                                                <p align="center">
                                                    <a href="https://skillicons.dev">
                                                        <img width={'350px'} src="https://skillicons.dev/icons?i=javascript,next,vercel,graphql,prisma,react,mysql,apollo,githubactions,github" />
                                                    </a>
                                                </p>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>
                        </Flex>

                    </Fragment >
                </motion.div >
            )
            }

            {
                width >= 768 && width < 1280 && (
                    <Fragment>
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}>
                            <Heading id='myproject' my={20} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                            </span>My Projects<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                            </Heading>

                            <Flex>
                                <Card margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                    <CardBody>
                                        <Image
                                            borderWidth={10}
                                            borderBottomColor={ternaryColor}
                                            src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fworkfrom.jpg?alt=media&token=0fc026ab-f0c3-4df0-a492-0631ec42bc44"}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading>Workfrom</Heading>
                                            <Text fontWeight={'bold'}>Instant Online Coworking Space Dashboard</Text>
                                            <Flex alignItems={'center'} >
                                                <p style={{ width: "400px" }} align="center">
                                                    <a href="https://skillicons.dev">
                                                        <img src="https://skillicons.dev/icons?i=javascript,react,aws,fastapi,github,python,vite,nginx,cloudflare" />
                                                    </a>
                                                </p>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>

                                <Card margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                    <CardBody>
                                        <Image
                                            src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Froyale_progress.jpg?alt=media&token=e8e0bb41-7a07-4154-84b3-782790d5878c"}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading>Royal Progress</Heading>
                                            <Text fontWeight={'bold'}>Landing Page & Appointment Schedule</Text>
                                            <Flex alignItems={'center'}>
                                                <p style={{ width: "300px" }} align="center">
                                                    <a href="https://skillicons.dev">
                                                        <img src="https://skillicons.dev/icons?i=javascript,html,css,wordpress,github,figma,postman" />
                                                    </a>
                                                </p>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Flex>
                            <Flex>
                                <Card margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                    <CardBody>
                                        <Image
                                            src={'https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fsolopreneurs.jpg?alt=media&token=6de8e566-4cd6-4392-b3a4-05fe8f42d931'}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading>Solopreneurs AI</Heading>
                                            <Text fontWeight={'bold'}>AI Cutting-edge Technology Tools Dashboard</Text>
                                            <Flex alignItems={'center'} >
                                                <p style={{ width: "400px" }} align="center">
                                                    <a href="https://skillicons.dev">
                                                        <img src="https://skillicons.dev/icons?i=react,javascript,aws,fastapi,github,python,vite,nginx,cloudflare" />
                                                    </a>
                                                </p>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Flex>
                            <Flex>
                                <Card margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                    <CardBody>
                                        <Image
                                            src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fcerberry-project.png?alt=media&token=c3380e48-6525-4f86-83b7-91c6b410f209"}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading>Cerberry</Heading>
                                            <Text fontWeight={'bold'}>Blog Backend Services</Text>
                                            <Flex alignItems={'center'} >
                                                <p align="center">
                                                    <a href="https://skillicons.dev">
                                                        <img width={'350px'} src="https://skillicons.dev/icons?i=bootstrap,docker,python,flask,firebase,javascript,githubactions,github,vercel" />
                                                    </a>
                                                </p>

                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                                <Card margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                    <CardBody>
                                        <Image
                                            src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fhecate-project.png?alt=media&token=73b8cc1e-ea06-4896-993e-2563cbde4bab"}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading>Hecate</Heading>
                                            <Text fontWeight={'bold'}>Fullstack App Portofolio CMS</Text>
                                            <Flex alignItems={'center'} >
                                                <p align="center">
                                                    <a href="https://skillicons.dev">
                                                        <img width={'350px'} src="https://skillicons.dev/icons?i=javascript,next,vercel,graphql,prisma,react,mysql,apollo,githubactions,github" />
                                                    </a>
                                                </p>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Flex>
                            <Flex>
                                <Card margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                    <CardBody>
                                        <Image
                                            width={1920}
                                            src={'https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Ftb-disease-prediction.png?alt=media&token=e38601b3-5c59-4bbe-af76-d2e663d363b7'}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading>TBC Prediction Web App</Heading>
                                            <Text fontWeight={'bold'}>Tuberculosis Disease Prediction in Makassar City</Text>
                                            <Flex alignItems={'center'} >
                                                <p style={{ width: "400px" }} align="center">
                                                    <a href="https://skillicons.dev">
                                                        <img src="https://skillicons.dev/icons?i=react,javascript,vitest,vite,fastapi,github,python,tensorflow," />
                                                    </a>
                                                </p>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Flex>
                        </motion.div>
                    </Fragment>
                )
            }

            {/* // ** MOBILE SCREEN SIZE  */}
            {
                width < 768 && (
                    <Fragment>
                        <Heading id='myproject' my={20} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                        </span>My Projects<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                        </Heading>

                        <Center mx={5}>
                            <Card teext boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW='xl'>
                                <CardBody>
                                    <Image
                                        src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fsolopreneurs.jpg?alt=media&token=6de8e566-4cd6-4392-b3a4-05fe8f42d931"}
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading>Solopreneurs AI</Heading>
                                        <Text fontWeight={'bold'}>AI Cutting-edge Technology Tools Dashboard</Text>
                                        <Flex alignItems={'center'} >
                                            <p align="center">
                                                <a href="https://skillicons.dev">
                                                    <img src="https://skillicons.dev/icons?i=react,javascript,aws,fastapi,github,python,vite,nginx,cloudflare" />
                                                </a>
                                            </p>
                                        </Flex>
                                    </Stack>
                                </CardBody>
                                <Divider />
                            </Card>
                        </Center>

                        <Center m={5}>
                            <Card boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW='xl'>
                                <CardBody>
                                    <Image
                                        borderWidth={10}
                                        borderBottomColor={ternaryColor}
                                        src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fworkfrom.jpg?alt=media&token=0fc026ab-f0c3-4df0-a492-0631ec42bc44"}
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading>Workfrom</Heading>
                                        <Text fontWeight={'bold'}>Instant Online Coworking Space Dashboard</Text>
                                        <Flex alignItems={'center'} >
                                            <p align="center">
                                                <a href="https://skillicons.dev">
                                                    <img src="https://skillicons.dev/icons?i=javascript,react,aws,fastapi,github,python,vite,nginx,cloudflare" />
                                                </a>
                                            </p>
                                        </Flex>
                                    </Stack>
                                </CardBody>
                                <Divider />
                            </Card>
                        </Center>

                        <Center m={5}>
                            <Card boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW='xl'>
                                <CardBody>
                                    <Image
                                        src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Ffeha.jpg?alt=media&token=c2202693-bfdf-4bf9-949d-3120695c2348"}
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading>FEHA</Heading>
                                        <Text fontWeight={'bold'}>Cyber Risk Assessments Dashboard</Text>
                                        <Flex alignItems={'center'} >
                                            <p>
                                                <a href="https://skillicons.dev">
                                                    <img width={'350px'} src="https://skillicons.dev/icons?i=javascript,react,flask,postgresql,github,python,vite,nginx,cloudflare" />
                                                </a>
                                            </p>
                                        </Flex>
                                    </Stack>
                                </CardBody>
                                <Divider />
                            </Card>
                        </Center>

                        <Center m={5}>
                            <Card boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW='xl'>
                                <CardBody>
                                    <Image
                                        src={"https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Froyale_progress.jpg?alt=media&token=e8e0bb41-7a07-4154-84b3-782790d5878c"}
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading>Royal Progress</Heading>
                                        <Text fontWeight={'bold'}>Landing Page & Appointment Schedule</Text>
                                        <Flex alignItems={'center'} >
                                            <p align="center">
                                                <a href="https://skillicons.dev">
                                                    <img src="https://skillicons.dev/icons?i=javascript,html,css,wordpress,github,figma,postman" />
                                                </a>
                                            </p>

                                        </Flex>
                                    </Stack>
                                </CardBody>
                                <Divider />
                            </Card>
                        </Center>

                        <Center m={5}>
                            <Card boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW='xl'>
                                <CardBody>
                                    <Image
                                        width={920}
                                        src={'https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Ftb-disease-prediction.png?alt=media&token=e38601b3-5c59-4bbe-af76-d2e663d363b7'}
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading>TBC Prediction Web App</Heading>
                                        <Text fontWeight={'bold'}>Tuberculosis Disease Prediction in Makassar City</Text>
                                        <Flex alignItems={'center'} >
                                            <p style={{ width: "400px" }} align="center">
                                                <a href="https://skillicons.dev">
                                                    <img src="https://skillicons.dev/icons?i=react,javascript,vitest,vite,fastapi,github,python,tensorflow," />
                                                </a>
                                            </p>
                                        </Flex>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Center>


                    </Fragment>
                )
            }
        </Fragment >

    )
}

export default Project  