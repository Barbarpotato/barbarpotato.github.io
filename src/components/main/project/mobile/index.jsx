import { Card, CardBody, Center, Flex, Heading, Image, Skeleton, Stack, Text } from '@chakra-ui/react'
import { primaryColor, primaryFontColor } from '../../../../theme/globalTheme'
import { Fragment } from 'react'

function ProjectMobile({ isLoading, contents, handleOnClickProjectCard }) {
    return (
        <Fragment>
            <Heading id='myproject' my={20} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span>{"<"}
            </span>My Projects<span>{'>'}</span>
            </Heading>
            {
                contents?.map((object, idx) => (
                    <Center mx={5} my={5} key={`project-regular-${idx}`}>
                        <Skeleton isLoaded={!isLoading} startColor='purple.500' endColor='black.800' rounded={'2xl'}>
                            <Card
                                onClick={() => !isLoading && handleOnClickProjectCard(object)}
                                cursor={isLoading ? 'default' : 'pointer'}
                                boxShadow={'dark-lg'}
                                backgroundColor={isLoading ? 'gray.700' : primaryColor}
                                maxW='xl'>
                                <CardBody>
                                    <Image
                                        loading='lazy'
                                        width={"400px"}
                                        height={"250px"}
                                        src={object.imageUrl}
                                        alt={`Image for ${object.heading}`}
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading color={isLoading ? 'gray.300' : primaryFontColor}>
                                            {object.heading}
                                        </Heading>
                                        <Text color={isLoading ? 'gray.400' : primaryFontColor} fontWeight={'bold'}>
                                            {object.text}
                                        </Text>
                                        <Flex alignItems={'center'}>
                                            <p align="center">
                                                <Image
                                                    loading='lazy'
                                                    width={"250px"}
                                                    height={"50px"}
                                                    src={object.skillsUrl}
                                                    alt={'Skills'}
                                                />
                                            </p>
                                        </Flex>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Skeleton>
                    </Center>
                ))
            }
        </Fragment>
    )
}

export default ProjectMobile  