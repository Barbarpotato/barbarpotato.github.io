// Core Modules
import React, { useEffect, useCallback, useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import { IconContext } from 'react-icons';
import Typewriter from 'typewriter-effect';
import TagCloud from 'TagCloud';
import { motion } from 'framer-motion';

// Custom Hooks
import { useResponsive } from '../../hooks/useResponsive';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const tagCloudVariants = {
    hidden: { opacity: 0, scale: 0.6, rotate: -10 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.5
        }
    }
};

function Hero() {
    const { isMobile } = useResponsive();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const initializeTagCloud = useCallback(() => {
        if (!isHydrated) return;

        const container = ".tagcloud";
        const texts = [
            "Frontend", "Backend", "Mobile App", "Web App", "Web Service",
            "SQL", "NoSQL", "Cache", "API", "Object Storage",
            "Orchestration", "Container", "AWS", "Google Cloud", "CI/CD",
            "TDD", "BDD",
            "ML", "LLM", "Security",
            "MVC", "gRPC", "WebSockets", "SOAP", "RESTful APIs", "GraphQL", "MQTT",
            "Microservices", "Serverless", "Monolithic",
            "Event-Driven", "CQRS"
        ];

        const options = {
            radius: isMobile ? 140 : 280,
            maxSpeed: "normal",
            initSpeed: "fast",
            keep: true,
        };

        const containerElement = document.querySelector(container);
        if (containerElement) {
            containerElement.innerHTML = "";
        }

        TagCloud(container, texts, options);
    }, [isMobile, isHydrated]);

    useEffect(() => {
        initializeTagCloud();

        return () => {
            const container = document.querySelector(".tagcloud");
            if (container) {
                container.innerHTML = "";
            }
        };
    }, [initializeTagCloud]);

    return (
        <Container maxW={'8xl'}>
            <Box className='stars'></Box>
            <Box className='stars2'></Box>
            <Box className='stars3'></Box>

            <Flex

                id='home'
                height={{ xl: '80vh' }}
                direction={{ base: 'column', xl: 'row' }}
                alignItems={'center'}
                textAlign={{ base: 'center', xl: 'left' }}
                as={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <MotionFlex
                    direction={'column'}
                    width={{ xl: '50%' }}
                    alignItems={{ xl: 'center' }}
                    variants={itemVariants}
                >
                    <Flex direction={'column'}>
                        <Text fontWeight={'bold'} fontSize={{ base: '34px', md: '42px', lg: '60px' }} color={"#faf9ff"}>
                            Hi,
                        </Text>
                        <Text fontWeight={'bold'} fontSize={{ base: '34px', md: '42px', lg: '60px' }} color={"#faf9ff"}>
                            I'm Darmawan,
                        </Text>
                        <Text fontWeight={'bold'} fontSize={{ base: '34px', md: '42px', lg: '60px' }} color={"#ff79c6"}>
                            Software Engineer
                        </Text>
                        <Text fontWeight={'bold'} fontSize={{ base: '16px', md: '18px' }} color={"#faf9ff"}>
                            <Typewriter
                                options={{
                                    strings: [
                                        "I'm currently working at PT. Samamaju Prima",
                                        "I'm currently working a 3PL Project",
                                        "Check out my latest labs for new updates"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 15,
                                }}
                            />
                        </Text>


                    </Flex>
                </MotionFlex>

                <MotionBox
                    height={{ base: "280px", md: "600px", lg: "auto" }}
                    width={{ xl: '50%' }}
                    className='text-shpere'
                    variants={tagCloudVariants}
                >
                    <span className='tagcloud'></span>
                </MotionBox>
            </Flex>
        </Container>
    );
}

export default Hero;
