import { Card, CardBody, Center, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { primaryColor, primaryFontColor } from '../../../../theme/globalTheme'
import { Fragment } from 'react'

function ProjectMobile({ contents, width, handleOnClickProjectCard }) {
    return (
        <Fragment>
            <Heading id='myproject' my={20} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span>{"<"}
            </span>My Projects<span>{'>'}</span>
            </Heading>
            {
                contents.map((object, idx) => (
                    <Center mx={5} my={5} key={`project-regular-${idx}`}>
                        <Card
                            onClick={() => handleOnClickProjectCard(object)} cursor={'pointer'}
                            boxShadow={'dark-lg'} backgroundColor={primaryColor} maxW='xl'>
                            <CardBody>
                                <Image loading='lazy' width={width} height={"250px"}
                                    src={object.imageUrl}
                                    alt={`Image for ${object.heading}`}
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading color={primaryFontColor}>{object.heading}</Heading>
                                    <Text color={primaryFontColor} fontWeight={'bold'}>{object.text}</Text>
                                    <Flex alignItems={'center'}>
                                        <p align="center">
                                            <img loading='lazy' width={"250px"} height={"50px"} src={object.skillsUrl} alt={'Skills'} />
                                        </p>
                                    </Flex>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Center>
                ))
            }
        </Fragment>
    )
}

export default ProjectMobile  