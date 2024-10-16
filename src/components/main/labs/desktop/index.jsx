import { primaryFontColor, secondaryColor } from '../../../../theme/globalTheme';
import {
    Flex, Heading, Box, Image, Text, Accordion, AccordionItem,
    AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { Fragment } from 'react';

function LandingLabDesktop({ blogs }) {

    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}>
            <Flex py={20} marginInline={'10%'} alignItems={'center'}>
                <Box className='text-labs-hero' justifyContent={'center'} m={8}>
                    <Heading
                        id="experience-heading" // ID for linking with aria-labelledby
                        pb={10}
                        textAlign={'center'}
                        opacity={0.8}
                        color={primaryFontColor}
                    >
                        <span style={{ color: secondaryColor }}>{"<"}</span>
                        Lab
                        <span style={{ color: secondaryColor }}>{' />'}</span>
                    </Heading>
                    <Text color={primaryFontColor} textAlign={'justify'} style={{
                        textAlign: 'justify', whiteSpace: 'pre-wrap',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica',
                        fontSize: '20px'
                    }}>
                        I frequently document my journey and share practical lessons learned from my experiments, which I refer to as
                        "Labs". You can explore my latest content in the Labs section here:
                    </Text>

                    <Accordion my={5} defaultIndex={[0]}>
                        {blogs.map((blog) => (
                            <Fragment key={`${blog.title}-${blog.timestamp}`}>
                                <AccordionItem>
                                    <h2 style={{ color: primaryFontColor }}>
                                        <AccordionButton _expanded={{ bg: secondaryColor, color: 'white' }}>
                                            <Box color={primaryFontColor} as='span' flex='1' textAlign='left'>
                                                {blog.title}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <Text color={primaryFontColor}>{blog.short_description}
                                            <a onClick={() => navigate(`/lab/${blog.blog_id}`)} style={{
                                                marginLeft: '5px', cursor: 'pointer',
                                                textDecoration: 'underline', color: secondaryColor
                                            }}>See More Details</a>
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Fragment>
                        ))}
                    </Accordion>

                </Box>
                <Image className='labs avatar-labs'
                    width={'50%'}
                    height={'100%'}
                    src='https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/blog-content%2FLabs_Hero_Image.png?alt=media&token=470a277f-497f-48d7-a186-ebf32014e074'
                    loading="lazy"
                    alt={"Darmawan's Lab"}
                />
            </Flex>
        </motion.div>
    )
}

export default LandingLabDesktop