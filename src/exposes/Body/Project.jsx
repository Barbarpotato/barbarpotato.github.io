// Core Modules
import { useState, useEffect, Fragment, Suspense, lazy } from 'react'
import {
    useDisclosure, useBreakpointValue, Flex, Stack, Text, Image,
    Heading, Box, Center, Card, CardBody
} from '@chakra-ui/react'

// API Modules
import { useDataProjects } from '../../api/projects/GET'

// Custom Modules
import { chunkArray, partitionArray } from '../../utils/PreprocessProjectData'

// Custom Components    
import Loading from '../../components/Loading'

// Lazy load the ProjectModal component
const ProjectModal = lazy(() => import('../Modal/Project'));


function Project() {

    const [tabletContents, setTabletContents] = useState([])
    // the desktop screen implement left & right partitions elements
    const [desktopContent, setDesktopContent] = useState({
        leftPartitions: [],
        rightPartitions: []
    })

    const { data: contents, isLoading, error } = useDataProjects()

    //this is used for the project detail modal functionality
    const { isOpen, onOpen, onClose } = useDisclosure()

    // this state is used for the project id data
    const [projectData, setProjectData] = useState({})

    // Responsive control for layout
    const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false, xl: false });
    const isTablet = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: false });
    const isDesktop = useBreakpointValue({ base: false, sm: false, md: false, lg: false, xl: true });

    useEffect(() => {
        // **
        // ensure the contents is not empty to preprocess the data
        if (contents) {
            // **
            // -- using if statement to prevent over used memory
            // -- pre-process data for desktop screen size
            if (window.innerWidth >= 1280) {
                // partition the contents array for the desktop screen size
                const [leftParitions, rightPartitions] = partitionArray(contents)
                // after partitions. the left partitions will implement chunk Array
                const chunkedArrRes = chunkArray(leftParitions, 3)
                setDesktopContent({ leftPartitions: chunkedArrRes, rightPartitions: rightPartitions })
            }

            // **
            // -- pre-process data for tablet screen size
            if (window.innerWidth >= 768 && window.innerWidth < 1280) {
                setTabletContents(chunkArray(contents, 3))
            }
        }
    }, [window.innerWidth, window.innerHeight, contents])

    const handleOnClickProjectCard = (objectData) => {
        // set the value to the project id. projectId state will be passed to the detail modal project
        setProjectData(objectData)
        // open the modal if the detail of the project exist
        if (objectData.htmlContent || objectData.htmlImage) {
            onOpen()
        }
    }

    if (isLoading) return <Loading />
    if (error) return <Text>Error loading projects content</Text>

    return (
        <Fragment>
            {/* Stars Animation */}
            <Suspense fallback={<Loading />}>
                <ProjectModal isOpen={isOpen} onClose={onClose} projectData={projectData} />
            </Suspense>


            <Box mt={'10vh'}>
                <Heading id='myproject' mb={10} textAlign={'center'} opacity={0.8} color={"#faf9ff"}><span style={{ color: "#bd93f9" }}>{"<"}
                </span>Projects<span style={{ color: "#bd93f9" }}>{' />'}</span>
                </Heading>
                {
                    isMobile && (
                        contents.map((object, idx) => (
                            <Center mx={5} my={5} key={`project-regular-${idx}`}>
                                <Card
                                    onClick={() => handleOnClickProjectCard(object)} cursor={'pointer'}
                                    boxShadow={'dark-lg'} backgroundColor={"#292b37"} maxW='xl'>
                                    <CardBody>
                                        <Image loading='lazy' width={"auto"} height={"auto"}
                                            src={object.imageUrl}
                                            alt={`Image for ${object.heading}`}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading color={"#faf9ff"}>{object.heading}</Heading>
                                            <Text color={"#faf9ff"} fontWeight={'bold'}>{object.text}</Text>
                                            <Flex alignItems={'center'}>
                                                <p align="center">
                                                    <img loading='lazy' width={"auto"} height={"auto"} src={object.skillsUrl} alt={'Skills'} />
                                                </p>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Center>
                        ))
                    )
                }

                {
                    isTablet && (
                        <Fragment>
                            {tabletContents.map((contentArray, idx) => (
                                <Fragment key={idx}>
                                    {contentArray.length === 1 ? (
                                        <Flex key={`tablet-project-large-${idx}`}>
                                            <Card
                                                onClick={() => handleOnClickProjectCard(contentArray[0])} cursor={'pointer'}
                                                margin={5} boxShadow={'dark-lg'} backgroundColor={"#292b37"}>
                                                <CardBody>
                                                    <Image width={"auto"} height={"auto"}
                                                        src={contentArray[0].imageUrl} alt={contentArray[0].heading}
                                                    />
                                                    <Stack mt='6' spacing='3'>
                                                        <Heading color={"#faf9ff"}>{contentArray[0].heading}</Heading>
                                                        <Text color={"#faf9ff"} fontWeight={'bold'}>{contentArray[0].text}</Text>
                                                        <Flex alignItems={'center'}>
                                                            <p style={{ width: "400px" }} align="center">
                                                                <img width={"auto"} height={"auto"} src={contentArray[0].skillsUrl} alt={"Skills"} />
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
                                                    key={`tablet-project-small-${contentIdx}`} margin={5} boxShadow={'dark-lg'} backgroundColor={"#292b37"}>
                                                    <CardBody>
                                                        <Image
                                                            alt={content.heading}
                                                            width={"auto"} height={"300px"}
                                                            borderWidth={10}
                                                            borderBottomColor={"#ff79c6"}
                                                            src={content.imageUrl}
                                                        />
                                                        <Stack mt='6' spacing='3'>
                                                            <Heading color={"#faf9ff"}>{content.heading}</Heading>
                                                            <Text color={"#faf9ff"} fontWeight={'bold'}>{content.text}</Text>
                                                            <Flex alignItems={'center'}>
                                                                <p style={{ width: "400px" }} align="center">
                                                                    <img width={"auto"} height={"100px"} src={content.skillsUrl} alt={"Skills"} />
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
                        </Fragment>
                    )
                }

                {
                    isDesktop && (
                        <Fragment>
                            <Flex justifyContent={'center'}>
                                <Box width={'50%'}>
                                    {desktopContent?.leftPartitions.map((contentArray, idx) => (
                                        <Fragment key={`left-partitions-${idx}`}>
                                            {contentArray.length === 1 ? (
                                                <Card
                                                    onClick={() => handleOnClickProjectCard(contentArray[0])} cursor={'pointer'}
                                                    className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={"#292b37"}>
                                                    <CardBody>
                                                        <Box className='zoom-container'>
                                                            <Image alt={contentArray[0].heading} src={contentArray[0].imageUrl} width={"auto"} height={"auto"} />
                                                        </Box>
                                                        <Stack mt='6' spacing='3'>
                                                            <Heading color={"#faf9ff"}>{contentArray[0].heading}</Heading>
                                                            <Text color={"#faf9ff"} fontWeight={'bold'}>{contentArray[0].text}</Text>
                                                            <Flex alignItems={'center'}>
                                                                <p style={{ width: "400px" }} align="center">
                                                                    <img width={"auto"} height={"50px"} src={contentArray[0].skillsUrl} alt="skills" />
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
                                                            key={index} className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={"#292b37"}>
                                                            <CardBody>
                                                                <Box className='zoom-container'>
                                                                    <Image width={"auto"} height={"300px"}
                                                                        borderWidth={10}
                                                                        borderBottomColor={"#ff79c6"}
                                                                        src={object.imageUrl}
                                                                        alt={object.heading}
                                                                    />
                                                                </Box>
                                                                <Stack mt='6' spacing='3'>
                                                                    <Heading color={"#faf9ff"}>{object.heading}</Heading>
                                                                    <Text color={"#faf9ff"} fontWeight={'bold'}>{object.text}</Text>
                                                                    <Flex alignItems={'center'}>
                                                                        <p style={{ width: "400px" }} align="center">
                                                                            <img width={"auto"} height={"50px"} src={object.skillsUrl} alt="skills" />
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
                                            key={`right-partition-${idx}`} className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={"#292b37"} maxW={'sm'}>
                                            <CardBody>
                                                <Box className='zoom-container'>
                                                    <Image loading='lazy' alt={content.heading} width={"auto"} height={"300px"} src={content.imageUrl} />
                                                </Box>
                                                <Stack mt='6' spacing='3'>
                                                    <Heading color={"#faf9ff"}>{content.heading}</Heading>
                                                    <Text color={"#faf9ff"} fontWeight={'bold'}>{content.text}</Text>
                                                    <Flex alignItems={'center'}>
                                                        <p>
                                                            <img loading='lazy' width={'auto'} height={"50px"} src={content.skillsUrl} alt="skills" />
                                                        </p>
                                                    </Flex>
                                                </Stack>
                                            </CardBody>
                                        </Card>
                                    ))}
                                </Box>
                            </Flex>
                        </Fragment>
                    )
                }
            </Box>

        </Fragment >
    )
}

export default Project