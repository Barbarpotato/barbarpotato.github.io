import { primaryFontColor, secondaryColor } from '../../../../theme/globalTheme';
import {
    Heading, Box, Text, Accordion, AccordionItem,
    AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react';

function LandingLabMobile({ blogs }) {

    const navigate = useNavigate()

    return (
        <Box mt={20} className='text-labs-hero' justifyContent={'center'} mx={10}>

            <Heading
                id="experience-heading" // ID for linking with aria-labelledby
                mb={10}
                textAlign={'center'}
                opacity={0.8}
                color={primaryFontColor}
            >
                <span style={{ color: secondaryColor }}>{"<"}</span>
                Lab
                <span style={{ color: secondaryColor }}>{' />'}</span>
            </Heading>


            <Text textAlign={'justify'} style={{
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
                            <h2>
                                <AccordionButton _expanded={{ bg: secondaryColor, color: 'white' }}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        {blog.title}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Text >{blog.short_description}
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
    )
}

export default LandingLabMobile