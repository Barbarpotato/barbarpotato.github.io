import { Card, CardBody, Flex, Heading, Image, Stack, Text, Skeleton } from '@chakra-ui/react'
import { chunkArray } from '../../../../utils/preprocessData'
import { primaryColor, primaryFontColor, ternaryColor } from '../../../../theme/globalTheme'
import { Fragment, useEffect, useState } from 'react'
import { motion } from "framer-motion"

function ProjectTablet({ isLoading, contents, handleOnClickProjectCard }) {

    const [tabletContents, setTabletContents] = useState([])

    useEffect(() => {
        // ** using if statement to prevent over used memory
        // ** pre-process data for tablet screen size
        setTabletContents(chunkArray(contents, 3))
    }, [contents, isLoading])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}>

            <Heading id='myproject' my={20} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span>{"<"}
            </span>My Projects<span>{'>'}</span>
            </Heading>

            {tabletContents.map((contentArray, idx) => (
                <Fragment key={idx}>
                    {contentArray.length === 1 ? (
                        <Flex key={`tablet-project-large-${idx}`}>
                            <Skeleton isLoaded={!isLoading} startColor='purple.500' endColor='black.800' margin={5} rounded={'2xl'}>
                                <Card
                                    onClick={() => handleOnClickProjectCard(contentArray[0])} cursor={'pointer'}
                                    boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                    <CardBody>
                                        <Image width={"1280px"} height={"600px"}
                                            src={contentArray[0].imageUrl} alt={contentArray[0].heading}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading color={primaryFontColor}>{contentArray[0].heading}</Heading>
                                            <Text color={primaryFontColor} fontWeight={'bold'}>{contentArray[0].text}</Text>
                                            <Flex alignItems={'center'}>
                                                <p style={{ width: "400px" }} align="center">
                                                    <img width={"500px"} height={"100px"} src={contentArray[0].skillsUrl} alt={"Skills"} />
                                                </p>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Skeleton>
                        </Flex>
                    ) : (
                        <Flex key={idx}>
                            {contentArray.map((content, contentIdx) => (
                                <Skeleton isLoaded={!isLoading} startColor='purple.500' endColor='black.800' margin={5} width={!isLoading ? "45%" : null} rounded={'2xl'} key={`tablet-project-small-${contentIdx}`}>
                                    <Card
                                        onClick={() => handleOnClickProjectCard(content)} cursor={'pointer'}
                                        boxShadow={'dark-lg'} backgroundColor={primaryColor}>
                                        <CardBody>
                                            <Image
                                                alt={content.heading}
                                                width={"1280px"} height={"300px"}
                                                borderWidth={10}
                                                borderBottomColor={ternaryColor}
                                                src={content.imageUrl}
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading color={primaryFontColor}>{content.heading}</Heading>
                                                <Text color={primaryFontColor} fontWeight={'bold'}>{content.text}</Text>
                                                <Flex alignItems={'center'}>
                                                    <p style={{ width: "400px" }} align="center">
                                                        <img width={"500px"} height={"100px"} src={content.skillsUrl} alt={"Skills"} />
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
            ))
            }

        </motion.div >
    )
}

export default ProjectTablet  