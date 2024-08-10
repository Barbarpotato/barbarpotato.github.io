import { Fragment } from 'react'
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import TagCloud from 'TagCloud';
import { primaryFontColor, ternaryColor } from '../../theme/globalTheme';
import { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { Box, Flex, Text, Button, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Hero({ typeWriter, width }) {

    useEffect(() => {
        const container = ".tagcloud";
        const texts = [
            "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Next", "Fast API", "React Native",
            "MySQL", "PostgreSQL", "Git", "Python", "PHP", "TypeScript", "Flask", "Cloud",
            "Firebase", "AWS", "CI/CD", "Docker", "Kubernetes", "Linux", "TDD/BDD", "GraphQL", 'REST API'
        ];
        let radiusSize;
        if (width >= 1280) radiusSize = 330;
        else if (width >= 768 && width < 1280) radiusSize = 250;
        else radiusSize = 120;
        const options = {
            radius: radiusSize, maxSpeed: 'normal', initSpeed: 'fast', keep: true
        };
        TagCloud(container, texts, options);
    }, []);

    return (
        <Fragment>
            {/* // ** DESKTOP SCREEN SIZE  */}
            {width >= 1280 && (
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
                        <Text width={"90%"} fontWeight={'bold'} fontSize={'xl'} color={'#505d83'}>
                            <Typewriter

                                options={{
                                    strings: typeWriter,
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 15,
                                }}
                            />
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
                                <Button fontWeight={'bold'} colorScheme='purple' variant={'outline'}>
                                    <a href='https://wa.me/6282148282424' target='_blank'>Contact Me </a>
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
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <Box mt={6}>
                                    <a target='_blank' href='https://www.instagram.com/darmajr94?igsh=OGgwNTRnaGFxeTY1'>
                                        <FaInstagram className='social-icon' />
                                    </a>
                                </Box>
                                <Box mt={6}>
                                    <a target='_blank' href='https://www.linkedin.com/in/darmawan-jr-b16135220/'>
                                        <FaLinkedin className='social-icon' />
                                    </a>
                                </Box>
                                <Box mt={6}>
                                    <a target='_blank' href='https://github.com/Barbarpotato'>
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
            )
            }



            {/* // ** PHONE & TABLET SCREEN SIZE  */}
            {
                width < 1280 && (
                    <Box >
                        <Box py={10} textAlign={'center'}>
                            <Text fontWeight={'bold'} style={{ fontSize: width < 768 ? '40px' : '60px' }} color={primaryFontColor}>Hi,</Text>
                            <Text fontWeight={'bold'} style={{ fontSize: width < 768 ? '40px' : '60px' }} color={primaryFontColor}>I'm Darmawan,</Text>
                            <Text fontWeight={'bold'} style={{ fontSize: width < 768 ? '40px' : '60px' }} color={ternaryColor}>Software Engineer</Text>
                            <Text fontWeight={'bold'} style={{ fontSize: width < 768 ? '14px' : '25px' }} color={'#505d83'}>
                                <Typewriter
                                    options={{
                                        strings: typeWriter,
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 15,
                                    }}
                                />
                            </Text>
                            <Flex justifyContent={'center'} gap={5} py={5}>
                                <Link to={'/labs'}>
                                    <Button size={width < 768 ? 'sm' : 'lg'} fontWeight={'bold'} colorScheme='purple' color={'black'}>My Lab 🧪</Button>
                                </Link>
                                <Button size={width < 768 ? 'sm' : 'lg'} fontWeight={'bold'} colorScheme='purple' variant={'outline'}>
                                    <a href='https://wa.me/6282148282424' target='_blank'>Contact Me</a>
                                </Button>
                            </Flex>

                            <Flex justifyContent={'center'} gap={5}>
                                <IconContext.Provider value={{ color: "#615a87", size: width < 768 ? "1.5em" : "2.5em" }}>
                                    <Box mt={6}>
                                        <a target='_blank' href='https://www.instagram.com/darmajr94?igsh=OGgwNTRnaGFxeTY1'>
                                            <FaInstagram />
                                        </a>
                                    </Box>
                                    <Box mt={6}>
                                        <a target='_blank' href='https://www.linkedin.com/in/darmawan-jr-b16135220/'>
                                            <FaLinkedin />
                                        </a>
                                    </Box>
                                    <Box mt={6}>
                                        <a target='_blank' href='https://github.com/Barbarpotato'>
                                            <FaGithub />
                                        </a>
                                    </Box>
                                </IconContext.Provider>
                            </Flex>

                        </Box>
                        <div className='text-shpere'>
                            <span className='tagcloud' style={{ fontSize: width < 768 ? '12px' : '25px' }}></span>
                        </div>
                    </Box >
                )
            }

        </Fragment >
    )
}

export default Hero