import { Box, Heading, Image, Button, Center } from '@chakra-ui/react'
import { primaryFontColor } from '../../../../theme/globalTheme'

function AboutMobile({ aboutMe, contentStyle, avatarUrl, resumeUrl }) {
    return (
        <Box pt={5} w={'100%'} position={'relative'}>
            <Center>
                <Image alt='Darmawan Avatar' className='mobile-avatar' w={'300px'} height={'300px'} src={avatarUrl} />
            </Center>
            <Box mt={20} justifyContent={'center'} mx={10} color={primaryFontColor}>
                <Heading id='aboutme' mb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span>{"<"}
                </span>About Me<span>{'>'}</span>
                </Heading>

                <Box mx={2}>
                    <pre style={contentStyle}>
                        {aboutMe}
                    </pre>
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