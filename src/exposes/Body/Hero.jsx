// Core Modules
import React, { useEffect, useCallback, useState } from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
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
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

function Hero() {
    const { isMobile } = useResponsive();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const initializeTagCloud = useCallback(() => {
        if (!isHydrated) return;

        const container = '.tagcloud';
        const texts = [
            'Frontend', 'Backend', 'Mobile App', 'Web App', 'Web Service',
            'SQL', 'NoSQL', 'Cache', 'API', 'Object Storage',
            'Orchestration', 'Container', 'AWS', 'Google Cloud', 'CI/CD',
            'TDD', 'BDD', 'ML', 'LLM', 'Security',
            'MVC', 'gRPC', 'WebSockets', 'SOAP', 'RESTful APIs', 'GraphQL', 'MQTT',
            'Microservices', 'Serverless', 'Monolithic',
            'Event-Driven', 'CQRS',
        ];

        const options = {
            radius: isMobile ? 350 : 580,
            maxSpeed: 'normal',
            initSpeed: 'fast',
            keep: true,
        };

        const containerElement = document.querySelector(container);
        if (containerElement) {
            containerElement.innerHTML = '';
        }

        TagCloud(container, texts, options);
    }, [isMobile, isHydrated]);

    useEffect(() => {
        initializeTagCloud();

        return () => {
            const container = document.querySelector('.tagcloud');
            if (container) {
                container.innerHTML = '';
            }
        };
    }, [initializeTagCloud]);

    return (
        <Container maxW="100%" height="100vh" position="relative" overflow="hidden" px={4}>
            <Box className="stars"></Box>
            <Box className="stars2"></Box>
            <Box className="stars3"></Box>

            {/* TagCloud with animated transition */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                animate={{ opacity: 0.8, scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.8,
                    ease: [0.2, 0.8, 0.2, 1],
                    delay: 0.5,
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'none',
                    zIndex: 0,
                    filter: isMobile ? 'blur(1px)' : 'blur(2px)',
                }}
            >
                <span className="tagcloud"></span>
            </motion.div>

            <Flex
                id="home"
                height="100%"
                direction="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                as={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                position="relative"
                zIndex={0}
            >
                <MotionFlex direction="column" maxW="80%" variants={itemVariants}>
                    <Text
                        fontWeight="bold"
                        fontSize={{ base: '34px', md: '64px', lg: '96px' }}
                        color="#faf9ff"
                        lineHeight="1.2"
                    >
                        Hi, I'm Darmawan
                    </Text>
                    <Text
                        fontWeight="bold"
                        fontSize={{ base: '34px', md: '48px', lg: '72px' }}
                        color="#ff79c6"
                        lineHeight="1.2"
                    >
                        Software Engineer
                    </Text>
                    <Text
                        fontWeight="bold"
                        fontSize={{ base: '20px', md: '24px', lg: '28px' }}
                        color="#faf9ff"
                        mt={4}
                    >
                        <Typewriter
                            options={{
                                strings: [
                                    "I'm currently working at PT. Samamaju Prima",
                                    "I'm currently working a 3PL Project",
                                    "Check out my latest labs for new updates",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 15,
                            }}
                        />
                    </Text>
                </MotionFlex>
            </Flex>
        </Container>
    );
}

export default Hero;
