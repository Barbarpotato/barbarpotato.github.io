// Core Modules
import React, { useEffect, useCallback, Fragment, useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { IconContext } from 'react-icons';
import Typewriter from 'typewriter-effect';
import TagCloud from 'TagCloud';

// Custom Hooks
import { useResponsive } from '../../hooks/useResponsive';


function Hero() {

    const { isMobile } = useResponsive();

    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true); // Set hydration flag to true on the client
    }, []);

    const initializeTagCloud = useCallback(() => {
        if (!isHydrated) return; // Wait for hydration

        const container = ".tagcloud";
        const texts = [
            "Frontend", "Backend", "Mobile App", "Web App", "Web Service",
            "SQL", "NoSQL", "Cache", "API", "Object Storage",
            "Orchestration", "Containerization", "AWS", "Google Cloud", "CI/CD",
            "TDD", "BDD",
            "ML", "LLM", "Security",
            "MVC", "gRPC", "WebSockets", "SOAP", "RESTful APIs", "GraphQL", "MQTT",
            "Microservices", "Serverless", "Monolithic",
            "Event-Driven", "CQRS"
        ];

        const options = {
            radius: isMobile ? 140 : 320,
            maxSpeed: "normal",
            initSpeed: "fast",
            keep: true,
        };

        // Clean up any existing TagCloud instance
        const containerElement = document.querySelector(container);
        if (containerElement) {
            containerElement.innerHTML = ""; // Clear previous tags
        }

        // Initialize the TagCloud
        TagCloud(container, texts, options);
    }, [isMobile, isHydrated]);


    useEffect(() => {
        initializeTagCloud();

        // Cleanup when the component is unmounted or dependencies change
        return () => {
            const container = document.querySelector(".tagcloud");
            if (container) {
                container.innerHTML = ""; // Clear existing TagCloud
            }
        };
    }, [initializeTagCloud]);

    return (
        <Fragment>
            {/* Stars Animation */}
            <Box className='stars'></Box>
            <Box className='stars2'></Box>
            <Box className='stars3'></Box>
            <Flex id='home' height={{ xl: '80vh' }} direction={{ base: 'column', xl: 'row' }} alignItems={'center'} textAlign={{ base: 'center', xl: 'left' }}>
                <Flex direction={'column'} width={{ xl: '50%' }} alignItems={{ xl: 'center' }}>

                    <Flex direction={'column'}>
                        <Text fontWeight={'bold'} fontSize={{ base: '30px', md: '40px', lg: '60px' }} color={"#faf9ff"}>Hi,</Text>
                        <Text fontWeight={'bold'} fontSize={{ base: '30px', md: '40px', lg: '60px' }} color={"#faf9ff"}>I'm Darmawan,</Text>
                        <Text fontWeight={'bold'} fontSize={{ base: '30px', md: '40px', lg: '60px' }} color={"#ff79c6"}>Software Engineer</Text>
                        <Text fontWeight={'bold'} fontSize={{ base: '14px', md: '18px' }} color={"#faf9ff"}>
                            <Typewriter
                                options={{
                                    strings: ["I'm currently working at PT. Samamaju Prima", "I'm currently working a 3PL Project", "Check out my latest labs for new updates"],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 15,
                                }}
                            />
                        </Text>

                        <Flex w={"100%"} alignItems={{ base: 'center', xl: 'left' }} justifyContent={{ base: 'center', xl: 'left' }} gap={5} pt={5}>

                            <Button as="a" href='https://barbarpotato.github.io/Labs/' size={{ base: 'sm', md: 'md' }}
                                fontWeight={'bold'} colorScheme='purple' color={'black'}>My Lab 🧪</Button>
                            <Button
                                size={{ base: 'sm', md: 'md' }}
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

                        <Flex justifyContent={{ base: 'center', xl: 'left' }} gap={5}>
                            <IconContext.Provider value={{ color: "#615a87", size: "1.5em" }}>
                                <Box mt={6}>
                                    <a target='_blank' href='https://www.instagram.com/darmajr94?igsh=OGgwNTRnaGFxeTY1' rel="noreferrer" aria-label="Visit Darmawan's Instagram profile">
                                        <FaInstagram className='social-icon' />
                                    </a>
                                </Box>
                                <Box mt={6}>
                                    <a target='_blank' href='https://www.linkedin.com/in/darmawan-jr-b16135220/' rel="noreferrer" aria-label="Visit Darmawan's LinkedIn profile">
                                        <FaLinkedin className='social-icon' />
                                    </a>
                                </Box>
                                <Box mt={6}>
                                    <a target='_blank' href='https://github.com/Barbarpotato' rel="noreferrer" aria-label="Visit Darmawan's GitHub profile">
                                        <FaGithub className='social-icon' />
                                    </a>
                                </Box>
                            </IconContext.Provider>
                        </Flex>

                    </Flex>
                </Flex>


                <Box height={{ base: "280px", md: "600px", lg: "auto" }} width={{ xl: '50%' }} className='text-shpere'>

                    <span className='tagcloud'></span>
                </Box>

            </Flex >
        </Fragment>
    )
}

export default Hero