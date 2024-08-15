import { Card, CardBody, Center, Flex, Heading, Image, Stack, Text, Box, useDisclosure } from '@chakra-ui/react'
import { primaryColor, primaryFontColor, ternaryColor } from '../../../theme/globalTheme'
import { chunkArray, partitionArray } from '../../../utils/preprocessData'
import React, { Fragment, useEffect } from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'
import ProjectModal from './modal'


function Project({ contents, width }) {

    const [tabletContents, setTabletContents] = useState([])
    // the desktop screen implement left & right partitions elements
    const [desktopContent, setDesktopContent] = useState({
        leftPartitions: [],
        rightPartitions: []
    })

    //this is used for the project detail modal functionality
    const { isOpen, onOpen, onClose } = useDisclosure()

    // this state is used for the project id data
    const [projectData, setProjectData] = useState({})

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

    const handleOnClickProjectCard = (objectData) => {
        // set the value to the project id. projectId state will be passed to the detail modal project
        setProjectData(objectData)
        // open the modal if the detail of the project exist
        if (objectData.htmlContent || objectData.htmlImage) {
            onOpen()
        }
    }

    return (
        <Fragment>
            <ProjectModal isOpen={isOpen} onClose={onClose} projectData={projectData} width={width} />
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
                                            <Card
                                                onClick={() => handleOnClickProjectCard(contentArray[0])} cursor={'pointer'}
                                                className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                                <CardBody>
                                                    <Box className='zoom-container'>
                                                        <Image src={contentArray[0].imageUrl} />
                                                    </Box>
                                                    <Stack mt='6' spacing='3'>
                                                        <Heading>{contentArray[0].heading}</Heading>
                                                        <Text fontWeight={'bold'}>{contentArray[0].text}</Text>
                                                        <Flex alignItems={'center'}>
                                                            <p style={{ width: "400px" }} align="center">
                                                                <a>
                                                                    <img src={contentArray[0].skillsUrl} />
                                                                </a>
                                                            </p>
                                                        </Flex>
                                                    </Stack>
                                                </CardBody>
                                            </Card>
                                        ) : (
                                            <Flex>
                                                {contentArray.map((object, index) => (
                                                    <Card
                                                        onClick={() => handleOnClickProjectCard(object)} cursor={'pointer'}
                                                        key={index} className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                                        <CardBody>
                                                            <Box className='zoom-container'>
                                                                <Image
                                                                    borderWidth={10}
                                                                    borderBottomColor={ternaryColor}
                                                                    src={object.imageUrl}
                                                                />
                                                            </Box>
                                                            <Stack mt='6' spacing='3'>
                                                                <Heading>{object.heading}</Heading>
                                                                <Text fontWeight={'bold'}>{object.text}</Text>
                                                                <Flex alignItems={'center'}>
                                                                    <p style={{ width: "400px" }} align="center">
                                                                        <a>
                                                                            <img src={object.skillsUrl} />
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
                                    <Card
                                        onClick={() => handleOnClickProjectCard(content)} cursor={'pointer'}
                                        key={`right-partition-${idx}`} className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW={'sm'}>
                                        <CardBody>
                                            <Box className='zoom-container'>
                                                <Image src={content.imageUrl} />
                                            </Box>
                                            <Stack mt='6' spacing='3'>
                                                <Heading>{content.heading}</Heading>
                                                <Text fontWeight={'bold'}>{content.text}</Text>
                                                <Flex alignItems={'center'}>
                                                    <p>
                                                        <a>
                                                            <img width={'350px'} src={content.skillsUrl} />
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
                                            <Card
                                                onClick={() => handleOnClickProjectCard(contentArray[0])} cursor={'pointer'}
                                                margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                                <CardBody>
                                                    <Image
                                                        src={contentArray[0].imageUrl}
                                                    />
                                                    <Stack mt='6' spacing='3'>
                                                        <Heading>{contentArray[0].heading}</Heading>
                                                        <Text fontWeight={'bold'}>{contentArray[0].text}</Text>
                                                        <Flex alignItems={'center'}>
                                                            <p style={{ width: "400px" }} align="center">
                                                                <a>
                                                                    <img src={contentArray[0].skillsUrl} />
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
                                                <Card
                                                    onClick={() => handleOnClickProjectCard(content)} cursor={'pointer'}
                                                    key={`tablet-project-small-${contentIdx}`} margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                                    <CardBody>
                                                        <Image
                                                            borderWidth={10}
                                                            borderBottomColor={ternaryColor}
                                                            src={content.imageUrl}
                                                        />
                                                        <Stack mt='6' spacing='3'>
                                                            <Heading>{content.heading}</Heading>
                                                            <Text fontWeight={'bold'}>{content.text}</Text>
                                                            <Flex alignItems={'center'}>
                                                                <p style={{ width: "400px" }} align="center">
                                                                    <a>
                                                                        <img src={content.skillsUrl} />
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
                                    <Card
                                        onClick={() => handleOnClickProjectCard(object)} cursor={'pointer'}
                                        boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW='xl'>
                                        <CardBody>
                                            <Image
                                                src={object.imageUrl}
                                                alt={`Image for ${object.heading}`}
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading>{object.heading}</Heading>
                                                <Text fontWeight={'bold'}>{object.text}</Text>
                                                <Flex alignItems={'center'}>
                                                    <p align="center">
                                                        <a>
                                                            <img src={object.skillsUrl} />
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