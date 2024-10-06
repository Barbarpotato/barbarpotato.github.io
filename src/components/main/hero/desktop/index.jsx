import { useEffect, useMemo } from 'react';
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import TagCloud from 'TagCloud';
import { primaryFontColor, ternaryColor } from '../../../../theme/globalTheme';
import { Box, Flex, Text, Button, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function HeroDesktop({ renderTypewriter, width }) {

    const radiusSize = useMemo(() => {
        if (width >= 1280) return 330;
        if (width >= 768 && width < 1280) return 250;
        return 120;
    }, [width]);

    useEffect(() => {
        const container = ".tagcloud";
        const texts = [
            "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Next", "Fast API", "React Native",
            "MySQL", "PostgreSQL", "Git", "Python", "PHP", "TypeScript", "Flask", "Cloud",
            "Firebase", "AWS", "CI/CD", "Docker", "Kubernetes", "Linux", "TDD/BDD", "GraphQL", 'REST API'
        ];
        const options = {
            radius: radiusSize, maxSpeed: 'normal', initSpeed: 'fast', keep: true
        };
        TagCloud(container, texts, options);
    }, [radiusSize]);

    return (
        <Flex py={10} alignItems={'center'} justifyContent={'center'}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <Text fontWeight={'bold'} fontSize={'7xl'} color={primaryFontColor}>Hi,</Text>
                <Text fontWeight={'bold'} fontSize={'7xl'} color={primaryFontColor}>I'm Darmawan,</Text>
                <Text fontWeight={'bold'} fontSize={'7xl'} color={ternaryColor}>Software Engineer</Text>
                <Text width={"90%"} fontWeight={'bold'} fontSize={'xl'} color={primaryFontColor}>
                    {renderTypewriter()}
                </Text>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <Flex gap={5} py={5}>
                        <Link to={"/labs"}>
                            <Button fontWeight={'bold'} colorScheme='purple' color={'black'}>My Lab 🧪</Button>
                        </Link>
                        <Button
                            fontWeight="bold"
                            colorScheme="purple"
                            variant="outline"
                            as="a"
                            href="https://wa.me/6282148282424"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Contact me via WhatsApp"
                        >
                            Contact Me
                        </Button>
                    </Flex>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 1.4,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <Flex px={5} mt={6}>
                        <Divider height={'70px'} width={'5px'} colorScheme={"purple"} backgroundColor={'#b28be9'} borderRadius={'lg'} orientation='vertical' />
                    </Flex>
                    <IconContext.Provider value={{ color: "#615a87", size: width < 768 ? "1.5em" : "2.5em" }}>
                        <Box mt={6}>
                            <a
                                style={{ display: 'inline-block' }}
                                target='_blank'
                                href='https://www.instagram.com/darmajr94?igsh=OGgwNTRnaGFxeTY1'
                                rel="noreferrer"
                                aria-label="Visit Darmawan's Instagram profile"
                            >
                                <FaInstagram className='social-icon' />
                            </a>
                        </Box>

                        <Box mt={6}>
                            <a
                                style={{ display: 'inline-block' }}
                                target='_blank'
                                href='https://www.linkedin.com/in/darmawan-jr-b16135220/'
                                rel="noreferrer"
                                aria-label="Visit Darmawan's LinkedIn profile"
                            >
                                <FaLinkedin className='social-icon' />
                            </a>
                        </Box>

                        <Box mt={6}>
                            <a
                                style={{ display: 'inline-block' }}
                                target='_blank'
                                href='https://github.com/Barbarpotato'
                                rel="noreferrer"
                                aria-label="Visit Darmawan's GitHub profile"
                            >
                                <FaGithub className='social-icon' />
                            </a>
                        </Box>
                    </IconContext.Provider>
                </motion.div>
            </motion.div>
            <Box>
                <motion.div
                    className="box text-sphere"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <span className='tagcloud'></span>
                </motion.div>
            </Box>
        </Flex >
    );
}

export default HeroDesktop;
