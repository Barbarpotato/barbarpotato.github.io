import { Card, CardBody, Center, Flex, Heading, Image, Stack, Text, Box } from '@chakra-ui/react'
import { primaryColor, primaryFontColor, ternaryColor } from '../../theme/globalTheme'
import { chunkArray, partitionArray } from '../../utils/preprocessData'
import React, { Fragment, useEffect } from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'


const contents = [
    {
        Id: 1,
        Heading: "Workfrom",
        Text: "Instant Online Coworking Space Dashboard",
        Image_Url: "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fworkfrom.jpg?alt=media&token=0fc026ab-f0c3-4df0-a492-0631ec42bc44",
        Skills_Url: "https://skillicons.dev/icons?i=javascript,react,aws,fastapi,github,python,vite,nginx,cloudflare"
    },
    {
        Id: 2,
        Heading: "Royal Progress",
        Text: "Landing Page & Appointment Schedule",
        Image_Url: "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Froyale_progress.jpg?alt=media&token=e8e0bb41-7a07-4154-84b3-782790d5878c",
        Skills_Url: "https://skillicons.dev/icons?i=javascript,html,css,wordpress,github,figma,postman"
    },
    {
        Id: 3,
        Heading: "Solopreneurs AI",
        Text: "AI Cutting-edge Technology Tools Dashboard",
        Image_Url: "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fsolopreneurs.jpg?alt=media&token=6de8e566-4cd6-4392-b3a4-05fe8f42d931",
        Skills_Url: "https://skillicons.dev/icons?i=react,javascript,aws,fastapi,github,python,vite,nginx,cloudflare"
    },
    {
        Id: 4,
        Heading: "TBC Prediction",
        Text: "Tuberculosis Disease Prediction in Makassar City",
        Image_Url: "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Ftb-disease-prediction.png?alt=media&token=e38601b3-5c59-4bbe-af76-d2e663d363b7",
        Skills_Url: "https://skillicons.dev/icons?i=react,javascript,vitest,vite,fastapi,github,python,tensorflow"
    },
    {
        Id: 5,
        Heading: "FEHA",
        Text: "Cyber Risk Assessments Dashboard",
        Image_Url: "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Ffeha.jpg?alt=media&token=c2202693-bfdf-4bf9-949d-3120695c2348",
        Skills_Url: "https://skillicons.dev/icons?i=javascript,react,flask,postgresql,github,python,vite,nginx,cloudflare"
    },
    {
        Id: 6,
        Heading: "Cerberry",
        Text: "Blog Backend Services",
        Image_Url: "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fcerberry-project.png?alt=media&token=c3380e48-6525-4f86-83b7-91c6b410f209",
        Skills_Url: "https://skillicons.dev/icons?i=bootstrap,docker,python,flask,firebase,javascript,githubactions,github,vercel"
    },
    {
        Id: 7,
        Heading: "Hecate",
        Text: "Fullstack App Portofolio CMS",
        Image_Url: "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fprojects%2Fhecate-project.png?alt=media&token=73b8cc1e-ea06-4896-993e-2563cbde4bab",
        Skills_Url: "https://skillicons.dev/icons?i=javascript,next,vercel,graphql,prisma,react,mysql,apollo,githubactions,github"
    }
]


function Project({ width }) {

    const [tabletContents, setTabletContents] = useState([])
    // the desktop screen implement left & right partitions elements
    const [desktopContent, setDesktopContent] = useState({
        leftPartitions: [],
        rightPartitions: []
    })

    useEffect(() => {
        // ** using if statement to prevent over used memory
        // ** pre-process data for desktop screen size
        if (width >= 1280) {
            // partition the contents array for the desktop screen size
            const [leftParitions, rightPartitions] = partitionArray(contents)
            // after partitions. the left partitions will implement chunk Array
            const chunkedArrRes = chunkArray(leftParitions, 3)
            setDesktopContent({ leftPartitions: chunkedArrRes, rightPartitions: rightPartitions })
        }
        // ** pre-process data for tablet screen size
        if (width >= 768 && width < 1280) {
            setTabletContents(chunkArray(contents, 3))
        }
    }, [width])

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
                                {desktopContent?.leftPartitions.map((contentArray, idx) => (
                                    <Fragment key={`left-partitions-${idx}`}>
                                        {contentArray.length === 1 ? (
                                            <Card className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                                <CardBody>
                                                    <Image src={contentArray[0].Image_Url} />
                                                    <Stack mt='6' spacing='3'>
                                                        <Heading>{contentArray[0].Heading}</Heading>
                                                        <Text fontWeight={'bold'}>{contentArray[0].Text}</Text>
                                                        <Flex alignItems={'center'}>
                                                            <p style={{ width: "400px" }} align="center">
                                                                <a href="https://skillicons.dev">
                                                                    <img src={contentArray[0].Skills_Url} />
                                                                </a>
                                                            </p>
                                                        </Flex>
                                                    </Stack>
                                                </CardBody>
                                            </Card>
                                        ) : (
                                            <Flex>
                                                {contentArray.map((object, index) => (
                                                    <Card key={index} className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                                        <CardBody>
                                                            <Image
                                                                borderWidth={10}
                                                                borderBottomColor={ternaryColor}
                                                                src={object.Image_Url}
                                                            />
                                                            <Stack mt='6' spacing='3'>
                                                                <Heading>{object.Heading}</Heading>
                                                                <Text fontWeight={'bold'}>{object.Text}</Text>
                                                                <Flex alignItems={'center'}>
                                                                    <p style={{ width: "400px" }} align="center">
                                                                        <a href="https://skillicons.dev">
                                                                            <img src={object.Skills_Url} />
                                                                        </a>
                                                                    </p>
                                                                </Flex>
                                                            </Stack>
                                                        </CardBody>
                                                    </Card>
                                                ))}
                                            </Flex>
                                        )}
                                    </Fragment>
                                ))}
                            </Box>

                            <Box>
                                {desktopContent?.rightPartitions.map((content, idx) => (
                                    <Card key={`right-partition-${idx}`} className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW={'sm'}>
                                        <CardBody>
                                            <Image src={content.Image_Url} />
                                            <Stack mt='6' spacing='3'>
                                                <Heading>{content.Heading}</Heading>
                                                <Text fontWeight={'bold'}>{content.Text}</Text>
                                                <Flex alignItems={'center'}>
                                                    <p>
                                                        <a href="https://skillicons.dev">
                                                            <img width={'350px'} src={content.Skills_Url} />
                                                        </a>
                                                    </p>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                ))}
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

                            {tabletContents.map((contentArray, idx) => (
                                <Fragment key={idx}>
                                    {contentArray.length === 1 ? (
                                        <Flex key={`tablet-project-large-${idx}`}>
                                            <Card margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                                <CardBody>
                                                    <Image
                                                        src={contentArray[0].Image_Url}
                                                    />
                                                    <Stack mt='6' spacing='3'>
                                                        <Heading>{contentArray[0].Heading}</Heading>
                                                        <Text fontWeight={'bold'}>{contentArray[0].Text}</Text>
                                                        <Flex alignItems={'center'}>
                                                            <p style={{ width: "400px" }} align="center">
                                                                <a href="https://skillicons.dev">
                                                                    <img src={contentArray[0].Skills_Url} />
                                                                </a>
                                                            </p>
                                                        </Flex>
                                                    </Stack>
                                                </CardBody>
                                            </Card>
                                        </Flex>
                                    ) : (
                                        <Flex key={idx}>
                                            {contentArray.map((content, contentIdx) => (
                                                <Card key={`tablet-project-small-${contentIdx}`} margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                                    <CardBody>
                                                        <Image
                                                            borderWidth={10}
                                                            borderBottomColor={ternaryColor}
                                                            src={content.Image_Url}
                                                        />
                                                        <Stack mt='6' spacing='3'>
                                                            <Heading>{content.Heading}</Heading>
                                                            <Text fontWeight={'bold'}>{content.Text}</Text>
                                                            <Flex alignItems={'center'}>
                                                                <p style={{ width: "400px" }} align="center">
                                                                    <a href="https://skillicons.dev">
                                                                        <img src={content.Skills_Url} />
                                                                    </a>
                                                                </p>
                                                            </Flex>
                                                        </Stack>
                                                    </CardBody>
                                                </Card>
                                            ))}
                                        </Flex>
                                    )}
                                </Fragment>
                            ))}

                        </motion.div>
                    </Fragment>
                )
            }

            {/* // ** MOBILE SCREEN SIZE  */}
            {
                width < 768 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}>
                        <Heading id='myproject' my={20} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                        </span>My Projects<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                        </Heading>
                        {
                            contents.map((object, idx) => (
                                <Center mx={5} my={5} key={`project-regular-${idx}`}>
                                    <Card boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW='xl'>
                                        <CardBody>
                                            <Image
                                                src={object.Image_Url}
                                                alt={`Image for ${object.Heading}`}
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading>{object.Heading}</Heading>
                                                <Text fontWeight={'bold'}>{object.Text}</Text>
                                                <Flex alignItems={'center'}>
                                                    <p align="center">
                                                        <a href="https://skillicons.dev">
                                                            <img src={object.Skills_Url} alt={`Skills for ${object.Heading}`} />
                                                        </a>
                                                    </p>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Center>
                            ))
                        }
                    </motion.div>
                )
            }
        </Fragment>
    )
}

export default Project  