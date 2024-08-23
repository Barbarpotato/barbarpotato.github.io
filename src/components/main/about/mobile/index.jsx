import { Box, Heading, Image, Button, Center, Skeleton } from '@chakra-ui/react'
import { primaryFontColor } from '../../../../theme/globalTheme'

function AboutMobile({ isLoading, aboutMe, contentStyle, avatarUrl, resumeUrl }) {
    return (
        <Box pt={5} w={'100%'} position={'relative'}>
            <Center>
                <Image loading='lazy' alt='Darmawan Avatar' className='mobile-avatar' w={'300px'} height={'300px'} src={avatarUrl} />
            </Center>
            <Box mt={20} justifyContent={'center'} mx={10} color={primaryFontColor}>
                <Heading id='aboutme' mb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span>{"<"}
                </span>About Me<span>{'>'}</span>
                </Heading>

                <Box mx={2}>
                    <Skeleton isLoaded={!isLoading} startColor='purple.500' endColor='black.800' rounded={'2xl'}>
                        <pre style={contentStyle}>
                            {aboutMe}
                        </pre>
                    </Skeleton>
                    <Button
                        as="a"
                        href={resumeUrl}
                        download="Darmawan CV"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download my resume"
                        color="white"
                        fontWeight="bold"
                        variant="outline"
                        colorScheme="purple"
                    >
                        See My Resume
                    </Button>
                </Box>

            </Box>
        </Box >
    )
}

export default AboutMobile