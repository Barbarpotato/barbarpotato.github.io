import { useEffect, useMemo, useCallback } from 'react';
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import TagCloud from 'TagCloud';
import { primaryFontColor, ternaryColor } from '../../../../theme/globalTheme';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function HeroMobile({ renderTypewriter, width }) {

    const radiusSize = useMemo(() => {
        if (width >= 1280) return 330;
        if (width >= 768 && width < 1280) return 250;
        return 120;
    }, [width]);

    const initializeTagCloud = useCallback(() => {
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

    useEffect(() => {
        initializeTagCloud();
        return () => {
            // Clean up the existing TagCloud instance
            const container = document.querySelector(".tagcloud");
            if (container) container.innerHTML = '';
        };
    }, [initializeTagCloud, radiusSize]);

    return (
        <Box>
            <Box py={10} textAlign={'center'}>
                <Text fontWeight={'bold'} fontSize={width < 768 ? '30px' : '60px'} color={primaryFontColor}>Hi,</Text>
                <Text fontWeight={'bold'} fontSize={width < 768 ? '30px' : '60px'} color={primaryFontColor}>I'm Darmawan,</Text>
                <Text fontWeight={'bold'} fontSize={width < 768 ? '30px' : '60px'} color={ternaryColor}>Software Engineer</Text>
                <Text fontWeight={'bold'} paddingInline={'20px'} fontSize={width < 768 ? '14px' : '20px'} color={primaryFontColor}>
                    {renderTypewriter()}
                </Text>
                <Flex justifyContent={'center'} gap={5} py={5}>
                    <Link to={'/labs'}>
                        <Button size={width < 768 ? 'sm' : 'lg'} fontWeight={'bold'} colorScheme='purple' color={'black'}>My Lab 🧪</Button>
                    </Link>
                    <Button
                        size={width < 768 ? 'sm' : 'lg'}
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
                <Flex justifyContent={'center'} gap={5}>
                    <IconContext.Provider value={{ color: "#615a87", size: width < 768 ? "1.5em" : "2.5em" }}>
                        <Box mt={6}>
                            <a target='_blank' href='https://www.instagram.com/darmajr94?igsh=OGgwNTRnaGFxeTY1' rel="noreferrer" aria-label="Visit Darmawan's Instagram profile">
                                <FaInstagram />
                            </a>
                        </Box>
                        <Box mt={6}>
                            <a target='_blank' href='https://www.linkedin.com/in/darmawan-jr-b16135220/' rel="noreferrer" aria-label="Visit Darmawan's LinkedIn profile">
                                <FaLinkedin />
                            </a>
                        </Box>
                        <Box mt={6}>
                            <a target='_blank' href='https://github.com/Barbarpotato' rel="noreferrer" aria-label="Visit Darmawan's GitHub profile">
                                <FaGithub />
                            </a>
                        </Box>
                    </IconContext.Provider>
                </Flex>
            </Box>
            <div className='text-shpere'>
                <span className='tagcloud'></span>
            </div>
        </Box>
    );
}

export default HeroMobile;