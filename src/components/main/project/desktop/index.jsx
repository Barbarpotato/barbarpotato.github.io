import { Card, CardBody, Flex, Heading, Image, Stack, Text, Box } from '@chakra-ui/react'
import { primaryColor, primaryFontColor, ternaryColor } from '../../../../theme/globalTheme'
import { Fragment } from 'react'
import { motion } from "framer-motion"

function ProjectDesktop({ desktopContent, handleOnClickProjectCard }) {

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
                                    <Card
                                        onClick={() => handleOnClickProjectCard(contentArray[0])} cursor={'pointer'}
                                        className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
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
                                ) : (
                                    <Flex>
                                        {contentArray.map((object, index) => (
                                            <Card
                                                onClick={() => handleOnClickProjectCard(object)} cursor={'pointer'}
                                                key={index} className='project-card' margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
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
                                        <Image alt={content.heading} width={"300px"} height={"300px"} src={content.imageUrl} />
                                    </Box>
                                    <Stack mt='6' spacing='3'>
                                        <Heading color={primaryFontColor}>{content.heading}</Heading>
                                        <Text color={primaryFontColor} fontWeight={'bold'}>{content.text}</Text>
                                        <Flex alignItems={'center'}>
                                            <p>
                                                <img width={'350px'} height={"50px"} src={content.skillsUrl} alt="skills" />
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

export default ProjectDesktop  