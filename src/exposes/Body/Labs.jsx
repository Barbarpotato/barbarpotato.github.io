// Core Modules
import { Fragment } from 'react'
import {
    Text, Flex, Heading, Accordion, AccordionItem, Box,
    AccordionButton, AccordionPanel, AccordionIcon, Image,
    Hide
} from '@chakra-ui/react';

// Custom Components
import Loading from '../../components/Loading';

// API Modules
import { useDataBlogLatest } from '../../api/labs/GET';


function LabHome() {

    const { data: latestBlogs, isLoading, error } = useDataBlogLatest();

    if (isLoading) return <Loading />
    if (error) return <Text>Error loading Labs content</Text>

    return (
        <Fragment>
            <Flex style={{ paddingInline: "2rem" }} alignItems={'center'} mt={{ xl: '10vh' }} direction={{ base: 'column', xl: 'row' }} justifyContent={{ xl: "center" }}>

                <Flex direction={{ "base": "column" }} width={{ xl: '50%' }} alignItems={{ "xl": "center" }} justifyContent={{ "xl": 'center' }}>
                    <Heading
                        textAlign={{ base: 'center', xl: 'left' }}
                        id="experience-heading" // ID for linking with aria-labelledby
                        mb={10}
                        opacity={0.8}
                        color={"#faf9ff"}
                    >
                        <span style={{ color: "#bd93f9" }}>{"<"}</span>
                        Lab
                        <span style={{ color: "#bd93f9" }}>{' />'}</span>
                    </Heading>

                    <Text color={"#faf9ff"} textAlign={'justify'} style={{
                        textAlign: 'justify', whiteSpace: 'pre-wrap',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica',
                        fontSize: '20px'
                    }}>
                        I frequently document my journey and share practical lessons learned from my experiments, which I refer to as
                        "Labs". You can explore my latest content in the Labs section here:
                    </Text>

                    <Accordion my={5} defaultIndex={[0]}>
                        {latestBlogs.map((blog) => (
                            <Fragment key={`${blog.title}-${blog.timestamp}`}>
                                <AccordionItem>
                                    <h2 style={{ color: "#faf9ff" }}>
                                        <AccordionButton _expanded={{ bg: "#bd93f9", color: 'white' }}>
                                            <Box color={"#faf9ff"} as='span' flex='1' textAlign='left'>
                                                {blog.title}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <Text color={"#faf9ff"} >{blog.short_description}
                                            <a href={`https://barbarpotato.github.io/Labs/${blog.slug}`} style={{
                                                marginLeft: '5px', cursor: 'pointer',
                                                textDecoration: 'underline', color: "#bd93f9"
                                            }}>See More Details...</a>
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Fragment>
                        ))}
                    </Accordion>
                </Flex>

                <Hide below='xl' >
                    <Box ml={10} className='square'>
                        <i style={{ "--clr": "#cc7bc9" }}></i>
                        <i style={{ "--clr": "#ff79c6" }}></i>
                        <i style={{ "--clr": "#bd93f9" }}></i>
                        <Image
                            width={'auto'}
                            height={'auto'}
                            src='/images/Labs-Avatar.webp'
                            loading="lazy"
                            alt={"Darmawan's Lab"}
                        />
                    </Box>
                </Hide>

            </Flex>
        </Fragment>

    )
}

export default LabHome