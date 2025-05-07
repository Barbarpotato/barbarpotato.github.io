import { useState, useEffect, Fragment } from 'react'
import {
    useBreakpointValue, Flex, Stack, Text, Image,
    Heading, Box, Center, Card, CardBody
} from '@chakra-ui/react'
import { useDataProjects } from '../../api/projects/GET'
import { chunkArray, partitionArray } from '../../utils/PreprocessProjectData'
import Loading from '../../components/Loading'

function Project() {
    const [tabletContents, setTabletContents] = useState([])
    const [desktopContent, setDesktopContent] = useState({
        leftPartitions: [],
        rightPartitions: []
    })

    const { data: contents, isLoading, error } = useDataProjects()

    const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false, xl: false })
    const isTablet = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: false })
    const isDesktop = useBreakpointValue({ base: false, sm: false, md: false, lg: false, xl: true })

    useEffect(() => {
        if (contents) {
            if (window.innerWidth >= 1280) {
                const [leftParitions, rightPartitions] = partitionArray(contents)
                const chunkedArrRes = chunkArray(leftParitions, 3)
                setDesktopContent({ leftPartitions: chunkedArrRes, rightPartitions: rightPartitions })
            }
            if (window.innerWidth >= 768 && window.innerWidth < 1280) {
                setTabletContents(chunkArray(contents, 3))
            }
        }
    }, [window.innerWidth, window.innerHeight, contents])

    if (isLoading) return <Loading />
    if (error) return <Text>Error loading projects content</Text>

    // Function to generate href from heading
    const generateHref = (heading) => {
        const slug = heading
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
        return `https://barbarpotato.github.io/Projects/${slug}`
    }

    return (
        <Fragment>
            <Box id='projects' mt={'10vh'}>
                <Heading id='myproject' mb={10} textAlign={'center'} opacity={0.8} color={"#faf9ff"}>
                    <span style={{ color: "#bd93f9" }}>{"<"}</span>Projects<span style={{ color: "#bd93f9" }}>{' />'}</span>
                </Heading>
                {
                    isMobile && (
                        contents.map((object, idx) => (
                            <Center mx={5} my={5} key={`project-regular-${idx}`}>
                                <Card
                                    as="a"
                                    href={generateHref(object.heading)}
                                    boxShadow={'dark-lg'}
                                    backgroundColor={"#292b37"}
                                    maxW='xl'
                                    _hover={{ '.show-project': { opacity: 1, transform: 'translateY(0)' } }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <CardBody>
                                        <Image
                                            loading='lazy'
                                            width={"auto"}
                                            height={"auto"}
                                            src={object.imageUrl}
                                            alt={`Image for ${object.heading}`}
                                            borderRadius="2xl" // Added 2xl border radius
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading color={"#faf9ff"}>{object.heading}</Heading>
                                            <Text color={"#faf9ff"} fontWeight={'bold'}>{object.text}</Text>
                                            <Box
                                                as="a"
                                                href={generateHref(object.heading)}
                                                color="#bd93f9"
                                                fontWeight="bold"
                                                fontSize="sm"
                                                opacity={0}
                                                transform="translateY(10px)"
                                                transition="opacity 0.3s ease, transform 0.3s ease"
                                                display="inline-block"
                                                mt={2}
                                                className="show-project"
                                            >
                                                Show Project
                                            </Box>
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
                                                as="a"
                                                href={generateHref(contentArray[0].heading)}
                                                margin={5}
                                                boxShadow={'dark-lg'}
                                                backgroundColor={"#292b37"}
                                                _hover={{ '.show-project': { opacity: 1, transform: 'translateY(0)' } }}
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <CardBody>
                                                    <Image
                                                        width={"auto"}
                                                        height={"auto"}
                                                        src={contentArray[0].imageUrl}
                                                        alt={contentArray[0].heading}
                                                        borderRadius="2xl" // Added 2xl border radius
                                                    />
                                                    <Stack mt='6' spacing='3'>
                                                        <Heading color={"#faf9ff"}>{contentArray[0].heading}</Heading>
                                                        <Text color={"#faf9ff"} fontWeight={'bold'}>{contentArray[0].text}</Text>
                                                        <Box
                                                            as="a"
                                                            href={generateHref(contentArray[0].heading)}
                                                            color="#bd93f9"
                                                            fontWeight="bold"
                                                            fontSize="sm"
                                                            opacity={0}
                                                            transform="translateY(10px)"
                                                            transition="opacity 0.3s ease, transform 0.3s ease"
                                                            display="inline-block"
                                                            mt={2}
                                                            className="show-project"
                                                        >
                                                            Show Project
                                                        </Box>
                                                    </Stack>
                                                </CardBody>
                                            </Card>
                                        </Flex>
                                    ) : (
                                        <Flex key={idx}>
                                            {contentArray.map((content, contentIdx) => (
                                                <Card
                                                    as="a"
                                                    href={generateHref(content.heading)}
                                                    key={`tablet-project-small-${contentIdx}`}
                                                    margin={5}
                                                    boxShadow={'dark-lg'}
                                                    backgroundColor={"#292b37"}
                                                    _hover={{ '.show-project': { opacity: 1, transform: 'translateY(0)' } }}
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <CardBody>
                                                        <Image
                                                            alt={content.heading}
                                                            width={"auto"}
                                                            height={"300px"}
                                                            borderWidth={10}
                                                            borderBottomColor={"#ff79c6"}
                                                            src={content.imageUrl}
                                                            borderRadius="2xl" // Added 2xl border radius
                                                        />
                                                        <Stack mt='6' spacing='3'>
                                                            <Heading color={"#faf9ff"}>{content.heading}</Heading>
                                                            <Text color={"#faf9ff"} fontWeight={'bold'}>{content.text}</Text>
                                                            <Box
                                                                as="a"
                                                                href={generateHref(content.heading)}
                                                                color="#bd93f9"
                                                                fontWeight="bold"
                                                                fontSize="sm"
                                                                opacity={0}
                                                                transform="translateY(10px)"
                                                                transition="opacity 0.3s ease, transform 0.3s ease"
                                                                display="inline-block"
                                                                mt={2}
                                                                className="show-project"
                                                            >
                                                                Show Project
                                                            </Box>
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
                                                    as="a"
                                                    href={generateHref(contentArray[0].heading)}
                                                    className='project-card'
                                                    margin={5}
                                                    boxShadow={'dark-lg'}
                                                    backgroundColor={"#292b37"}
                                                    _hover={{ '.show-project': { opacity: 1, transform: 'translateY(0)' } }}
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <CardBody>
                                                        <Box className='zoom-container'>
                                                            <Image
                                                                alt={contentArray[0].heading}
                                                                src={contentArray[0].imageUrl}
                                                                width={"auto"}
                                                                height={"auto"}
                                                                borderRadius="2xl" // Added 2xl border radius
                                                            />
                                                        </Box>
                                                        <Stack mt='6' spacing='3'>
                                                            <Heading color={"#faf9ff"}>{contentArray[0].heading}</Heading>
                                                            <Text color={"#faf9ff"} fontWeight={'bold'}>{contentArray[0].text}</Text>
                                                            <Box
                                                                as="a"
                                                                href={generateHref(contentArray[0].heading)}
                                                                color="#bd93f9"
                                                                fontWeight="bold"
                                                                fontSize="sm"
                                                                opacity={0}
                                                                transform="translateY(10px)"
                                                                transition="opacity 0.3s ease, transform 0.3s ease"
                                                                display="inline-block"
                                                                mt={2}
                                                                className="show-project"
                                                            >
                                                                Show Project
                                                            </Box>
                                                        </Stack>
                                                    </CardBody>
                                                </Card>
                                            ) : (
                                                <Flex>
                                                    {contentArray.map((object, index) => (
                                                        <Card
                                                            as="a"
                                                            href={generateHref(object.heading)}
                                                            key={index}
                                                            className='project-card'
                                                            margin={5}
                                                            boxShadow={'dark-lg'}
                                                            backgroundColor={"#292b37"}
                                                            _hover={{ '.show-project': { opacity: 1, transform: 'translateY(0)' } }}
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <CardBody>
                                                                <Box className='zoom-container'>
                                                                    <Image
                                                                        width={"auto"}
                                                                        height={"300px"}
                                                                        borderWidth={10}
                                                                        borderBottomColor={"#ff79c6"}
                                                                        src={object.imageUrl}
                                                                        alt={object.heading}
                                                                        borderRadius="2xl" // Added 2xl border radius
                                                                    />
                                                                </Box>
                                                                <Stack mt='6' spacing='3'>
                                                                    <Heading color={"#faf9ff"}>{object.heading}</Heading>
                                                                    <Text color={"#faf9ff"} fontWeight={'bold'}>{object.text}</Text>
                                                                    <Box
                                                                        as="a"
                                                                        href={generateHref(object.heading)}
                                                                        color="#bd93f9"
                                                                        fontWeight="bold"
                                                                        fontSize="sm"
                                                                        opacity={0}
                                                                        transform="translateY(10px)"
                                                                        transition="opacity 0.3s ease, transform 0.3s ease"
                                                                        display="inline-block"
                                                                        mt={2}
                                                                        className="show-project"
                                                                    >
                                                                        Show Project
                                                                    </Box>
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
                                            as="a"
                                            href={generateHref(content.heading)}
                                            key={`right-partition-${idx}`}
                                            className='project-card'
                                            margin={5}
                                            boxShadow={'dark-lg'}
                                            backgroundColor={"#292b37"}
                                            maxW={'sm'}
                                            _hover={{ '.show-project': { opacity: 1, transform: 'translateY(0)' } }}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <CardBody>
                                                <Box className='zoom-container'>
                                                    <Image
                                                        loading='lazy'
                                                        alt={content.heading}
                                                        width={"auto"}
                                                        height={"300px"}
                                                        src={content.imageUrl}
                                                        borderRadius="2xl" // Added 2xl border radius
                                                    />
                                                </Box>
                                                <Stack mt='6' spacing='3'>
                                                    <Heading color={"#faf9ff"}>{content.heading}</Heading>
                                                    <Text color={"#faf9ff"} fontWeight={'bold'}>{content.text}</Text>
                                                    <Box
                                                        as="a"
                                                        href={generateHref(content.heading)}
                                                        color="#bd93f9"
                                                        fontWeight="bold"
                                                        fontSize="sm"
                                                        opacity={0}
                                                        transform="translateY(10px)"
                                                        transition="opacity 0.3s ease, transform 0.3s ease"
                                                        display="inline-block"
                                                        mt={2}
                                                        className="show-project"
                                                    >
                                                        Show Project
                                                    </Box>
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
        </Fragment>
    )
}

export default Project