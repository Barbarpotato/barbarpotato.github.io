import React from 'react';
import { Box, Flex, Text, Link, SimpleGrid, Icon, Heading } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {

    // Define colors
    const primaryFontColor = '#faf9ff';
    const secondaryColor = '#bd93f9';

    const currentYear = new Date().getFullYear();

    // Smooth scroll handler
    const handleScroll = (e, id) => {
        e.preventDefault(); // Prevent default anchor behavior
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Align the top of the element with the top of the viewport
            });
        }
    };

    return (
        <Box boxShadow={'dark-lg'} as="footer" mt={100} backgroundColor={"#292b37"}
            color="white" py={10}>
            <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify={{ md: 'space-between' }}
                >
                    {/* Left Section: Logo and Description */}
                    <Box mb={{ base: 8, md: 0 }} maxW={{ md: 'md' }}>
                        <Flex align="center">
                            <Heading
                                fontSize="2xl"
                                color={primaryFontColor}
                            >
                                <span style={{ color: secondaryColor, fontWeight: 'bold' }}>
                                    🚀D
                                </span>
                                armawan
                            </Heading>
                        </Flex>
                        <Text mt={2} color="gray.400">
                            Crafting cutting-edge web experiences with passion and innovation. Let's collaborate to turn your vision into reality.
                        </Text>
                    </Box>

                    {/* Right Section: Navigation Links */}
                    <SimpleGrid
                        columns={{ base: 2, sm: 3 }}
                        spacing={8}
                        w={{ base: 'full', md: 'auto' }}
                    >
                        {/* Explore Column */}
                        <Box>
                            <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase" mb={4}>
                                Explore
                            </Text>
                            <Flex direction="column" gap={2}>
                                <Link href="#home" color="gray.400" _hover={{ color: 'pink.300' }} onClick={(e) => handleScroll(e, 'home')}>
                                    Home
                                </Link>
                                <Link href="#about" color="gray.400" _hover={{ color: 'pink.300' }} onClick={(e) => handleScroll(e, 'about')}>
                                    About
                                </Link>
                                <Link href="#labs" color="gray.400" _hover={{ color: 'pink.300' }} onClick={(e) => handleScroll(e, 'labs')}>
                                    Labs
                                </Link>
                                <Link href="#projects" color="gray.400" _hover={{ color: 'pink.300' }} onClick={(e) => handleScroll(e, 'projects')}>
                                    Projects
                                </Link>
                                <Link href="#experience" color="gray.400" _hover={{ color: 'pink.300' }} onClick={(e) => handleScroll(e, 'experience')}>
                                    Experience
                                </Link>
                                <Link href="#badges" color="gray.400" _hover={{ color: 'pink.300' }} onClick={(e) => handleScroll(e, 'badges')}>
                                    Badges
                                </Link>
                                <Link href="#contact" color="gray.400" _hover={{ color: 'pink.300' }} onClick={(e) => handleScroll(e, 'contact')}>
                                    Contact Me
                                </Link>
                            </Flex>
                        </Box>

                        {/* Connect Column */}
                        <Box>
                            <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase" mb={4}>
                                Connect
                            </Text>
                            <Flex direction="column" gap={2}>
                                <Link href="https://github.com/Barbarpotato" target="_blank" color="gray.400" _hover={{ color: 'pink.300' }}>
                                    GitHub
                                </Link>
                                <Link href="https://www.linkedin.com/in/darmawan-jr-b16135220/" target="_blank" color="gray.400" _hover={{ color: 'pink.300' }}>
                                    LinkedIn
                                </Link>
                                <Link href="https://www.instagram.com/darmajr94?igsh=OGgwNTRnaGFxeTY1" target="_blank" color="gray.400" _hover={{ color: 'pink.300' }}>
                                    Instagram
                                </Link>
                                <Link href="https://api.whatsapp.com/send/?phone=6282148282424&text&type=phone_number&app_absent=0" target="_blank" color="gray.400" _hover={{ color: 'pink.300' }}>
                                    WhatsApp
                                </Link>

                            </Flex>
                        </Box>

                        {/* Resources Column */}
                        <Box>
                            <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase" mb={4}>
                                Resources
                            </Text>
                            <Flex direction="column" gap={2}>
                                <Link href="https://barbarpotato.github.io/Labs/" target='_blank' color="gray.400" _hover={{ color: 'pink.300' }}>
                                    Labs
                                </Link>
                                <Link href="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=84919868-97bf-453d-9e9b-f282b463cc7b"
                                    target='_blank'
                                    color="gray.400" _hover={{ color: 'pink.300' }}>
                                    Resume
                                </Link>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Flex>

                {/* Bottom Section: Copyright and Social Icons */}
                <Box mt={8} pt={8} borderTop="1px" borderColor="gray.800">
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        align={{ md: 'center' }}
                        justify={{ md: 'space-between' }}
                    >
                        {/* Social Icons */}
                        <Flex order={{ md: 2 }} gap={6} mb={{ base: 8, md: 0 }} justify={{ base: 'center', md: 'flex-start' }}>
                            <Link href="https://github.com/Barbarpotato" target="_blank" color="gray.400" _hover={{ color: 'pink.300' }}>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/darmawan-jr-b16135220/" target="_blank" color="gray.400" _hover={{ color: 'pink.300' }}>
                                <Icon as={FaLinkedin} boxSize={6} />
                            </Link>
                            <Link href="https://www.instagram.com/darmajr94?igsh=OGgwNTRnaGFxeTY1" target="_blank" color="gray.400" _hover={{ color: 'pink.300' }}>
                                <Icon as={FaInstagram} boxSize={6} />
                            </Link>
                        </Flex>

                        {/* Copyright */}
                        <Flex
                            order={{ md: 1 }}
                            direction="row"
                            align="center"
                            color="gray.400"
                            justify={{ base: 'center', md: 'flex-start' }}
                        >
                            <Text fontSize="base">
                                © {currentYear} Barbarpotato. All rights reserved.
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;