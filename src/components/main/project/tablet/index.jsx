import { Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { primaryColor, primaryFontColor, ternaryColor } from '../../../../theme/globalTheme'
import { Fragment } from 'react'
import { motion } from "framer-motion"

function ProjectTablet({ tabletContents, handleOnClickProjectCard }) {
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
                            <Card
                                onClick={() => handleOnClickProjectCard(contentArray[0])} cursor={'pointer'}
                                margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
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
                        </Flex>
                    ) : (
                        <Flex key={idx}>
                            {contentArray.map((content, contentIdx) => (
                                <Card
                                    onClick={() => handleOnClickProjectCard(content)} cursor={'pointer'}
                                    key={`tablet-project-small-${contentIdx}`} margin={5} boxShadow={'dark-lg'} backgroundColor={primaryColor}>
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
                            ))}
                        </Flex>
                    )}
                </Fragment>
            ))}

        </motion.div>
    )
}

export default ProjectTablet  