import { Card, CardBody, Flex, Heading, Image, Stack, Text, Box, Skeleton } from '@chakra-ui/react'
import { partitionArray, chunkArray } from '../../../../utils/preprocessData'
import { primaryColor, primaryFontColor, ternaryColor } from '../../../../theme/globalTheme'
import { Fragment, useEffect, useState } from 'react'
import { motion } from "framer-motion"

function ProjectDesktop({ isLoading, contents, handleOnClickProjectCard }) {

    const [desktopContent, setDesktopContent] = useState({
        leftPartitions: [],
        rightPartitions: []
    })

    useEffect(() => {
        // ** using if statement to prevent over used memory
        // ** pre-process data for desktop screen size

        // partition the contents array for the desktop screen size
        const [leftParitions, rightPartitions] = partitionArray(contents)
        // after partitions. the left partitions will implement chunk Array
        const chunkedArrRes = chunkArray(leftParitions, 3)
        setDesktopContent({ leftPartitions: chunkedArrRes, rightPartitions: rightPartitions })
    }, [isLoading, contents])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}>
            <Fragment>

                <Heading id='myproject' my={20} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span>{"<"}
                </span>My Projects<span>{'>'}</span>
                </Heading>

                <Flex justifyContent={'center'} marginInline={"15%"}>
                    <Box width={'70%'}>
                        {desktopContent?.leftPartitions.map((contentArray, idx) => (
                            <Fragment key={`left-partitions-${idx}`}>
                                {contentArray.length === 1 ? (
                                    <Skeleton isLoaded={!isLoading} startColor='purple.500' endColor='black.800' m={!isLoading ? 5 : 0} rounded={'2xl'}>
                                        <Card
                                            onClick={() => handleOnClickProjectCard(contentArray[0])} cursor={'pointer'}
                                            className='project-card' boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                            <CardBody>
                                                <Box className='zoom-container'>
                                                    <Image alt={contentArray[0].heading} src={contentArray[0].imageUrl} width={"300px"} height={"300px"} />
                                                </Box>
                                                <Stack mt='6' spacing='3'>
                                                    <Heading color={primaryFontColor}>{contentArray[0].heading}</Heading>
                                                    <Text color={primaryFontColor} fontWeight={'bold'}>{contentArray[0].text}</Text>
                                                    <Flex alignItems={'center'}>
                                                        <p style={{ width: "400px" }} align="center">
                                                            <img width={"400px"} height={"50px"} src={contentArray[0].skillsUrl} alt="skills" />
                                                        </p>
                                                    </Flex>
                                                </Stack>
                                            </CardBody>
                                        </Card>
                                    </Skeleton>
                                ) : (
                                    <Flex>
                                        {contentArray.map((object, index) => (
                                            <Skeleton isLoaded={!isLoading} startColor='purple.500' endColor='black.800' m={!isLoading ? 5 : 0} width={!isLoading ? "45%" : null} rounded={'2xl'} key={index}>
                                                <Card
                                                    onClick={() => handleOnClickProjectCard(object)} cursor={'pointer'}
                                                    className='project-card' boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                                    <CardBody>
                                                        <Box className='zoom-container'>
                                                            <Image width={"300px"} height={"300px"}
                                                                borderWidth={10}
                                                                borderBottomColor={ternaryColor}
                                                                src={object.imageUrl}
                                                                alt={object.heading}
                                                            />
                                                        </Box>
                                                        <Stack mt='6' spacing='3'>
                                                            <Heading color={primaryFontColor}>{object.heading}</Heading>
                                                            <Text color={primaryFontColor} fontWeight={'bold'}>{object.text}</Text>
                                                            <Flex alignItems={'center'}>
                                                                <p style={{ width: "400px" }} align="center">
                                                                    <img width={"400px"} height={"50px"} src={object.skillsUrl} alt="skills" />
                                                                </p>
                                                            </Flex>
                                                        </Stack>
                                                    </CardBody>
                                                </Card>
                                            </Skeleton>
                                        ))}
                                    </Flex>
                                )}
                            </Fragment>
                        ))}
                    </Box>

                    <Box>
                        {desktopContent?.rightPartitions.map((content, idx) => (
                            <Skeleton isLoaded={!isLoading} startColor='purple.500' endColor='black.800' rounded={'2xl'} m={!isLoading ? 5 : 0} key={`right-partition-${idx}`}>
                                <Card
                                    onClick={() => handleOnClickProjectCard(content)} cursor={'pointer'}
                                    className='project-card' boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW={'sm'}>
                                    <CardBody>
                                        <Box className='zoom-container'>
                                            <Image loading='lazy' alt={content.heading} width={"300px"} height={"300px"} src={content.imageUrl} />
                                        </Box>
                                        <Stack mt='6' spacing='3'>
                                            <Heading color={primaryFontColor}>{content.heading}</Heading>
                                            <Text color={primaryFontColor} fontWeight={'bold'}>{content.text}</Text>
                                            <Flex alignItems={'center'}>
                                                <p>
                                                    <img loading='lazy' width={'350px'} height={"50px"} src={content.skillsUrl} alt="skills" />
                                                </p>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Skeleton>
                        ))}
                    </Box>
                </Flex>
            </Fragment >
        </motion.div >
    )
}

export default ProjectDesktop  