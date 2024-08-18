import { Box, Flex, Heading, Image, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { primaryFontColor } from '../../../../theme/globalTheme'

function AboutDesktop({ aboutMe, contentStyle, avatarUrl, resumeUrl }) {
    return (
        <Flex py={20} px={20} alignItems={'center'}>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}>
                <Box pl={20}  >
                    <Image alt='Darmawan Avatar' className='avatar' src={avatarUrl} />
                </Box>
            </motion.div >

            <Box pt={5} pl={5} w={'50%'} justifyContent={'center'} mx={10} color={primaryFontColor}>
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}>
                    <Box my={5}>
                        <Heading id='aboutme' opacity={0.8} color={primaryFontColor}><span>{"<"}
                        </span>About Me<span>{'>'}</span>
                        </Heading>
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}>
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
                </motion.div>
            </Box>
        </Flex >
    )
}

export default AboutDesktop