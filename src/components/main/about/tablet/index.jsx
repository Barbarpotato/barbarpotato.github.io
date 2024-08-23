import { Box, Heading, Image, Button, Center, Skeleton } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { primaryFontColor } from '../../../../theme/globalTheme'

function AboutTablet({ isLoading, aboutMe, contentStyle, avatarUrl, resumeUrl }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}>
            <Box pt={20} w={'100%'} position={'relative'} className='hero-medium'>
                <Center>
                    <Image loading='lazy' alt='Darmawan Avatar' className='mobile-avatar' w={'500px'} height={'450px'} src={avatarUrl} />
                </Center>

                <Box mt={20} justifyContent={'center'} mx={10} color={primaryFontColor}>
                    <Heading id='aboutme' my={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span>{"<"}
                    </span>About Me<span>{'>'}</span>
                    </Heading>

                    <Box mx={12}>
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
        </motion.div>
    )
}

export default AboutTablet