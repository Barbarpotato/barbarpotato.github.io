import React from 'react';
import { Box, Heading, Image, Button, Center, Flex } from '@chakra-ui/react';
import { useResponsive } from '../../hooks/useResponsive';

function About() {

    // Responsive control for layout
    const { isMobile } = useResponsive();

    return (

        <Flex style={{ marginBottom: "5rem", paddingInline: "2rem" }} width={"100%"}>
            <Flex
                direction={{ base: "column", xl: "row" }}
                mt={20}
                justifyContent="center"
                alignItems="center"
                color="#faf9ff"
            >
                {/* Image Section */}
                <Box textAlign="center" mb={isMobile ? 5 : 0} >
                    {isMobile && (
                        <Heading
                            id="aboutme"
                            textAlign="center"
                            opacity={0.8}
                            mb={5}
                            color="#faf9ff"
                        >
                            <span style={{ color: "#bd93f9" }}>{"<"}</span>
                            About Me
                            <span style={{ color: "#bd93f9" }}>{' />'}</span>
                        </Heading>
                    )}
                    <Center>
                        <Image
                            alt="Darmawan Avatar"
                            className="mobile-avatar"
                            w={isMobile ? "300px" : "auto"}
                            h={isMobile ? "300px" : "auto"}
                            src="/images/Avatar.webp"
                        />
                    </Center>
                </Box>

                {/* Text Section */}
                <Box mx={4} width={isMobile ? "100%" : "50%"}>
                    {!isMobile && (
                        <Heading
                            id="aboutme"
                            opacity={0.8}
                            mb={4}
                            color="#faf9ff"
                        >
                            <span style={{ color: "#bd93f9" }}>{"<"}</span>
                            About Me
                            <span style={{ color: "#bd93f9" }}>{' />'}</span>
                        </Heading>
                    )}
                    <Box
                        mb={5}
                        whiteSpace="pre-wrap"
                        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica"
                        fontSize="20px"
                        color="#faf9ff"
                        textAlign={"justify"}
                    >
                        Hello, call me Darma. I am currently working as a Software Engineer. My flexibility in adapting to changing technologies and project demands makes me a valuable asset to development teams. Furthermore, I am always eager to expand my knowledge and keep up with the latest trends in the software development world.
                        Additionally, I have a strong understanding of technical concepts such as system design, software testing, and project management. I believe that good code quality, solid teamwork, and effective communication are key to success in software development.
                    </Box>
                    <Button
                        as="a"
                        href="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=84919868-97bf-453d-9e9b-f282b463cc7b"
                        download="Darmawan CV"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Download my resume"
                        fontWeight="bold"
                        colorScheme="purple"
                        variant="outline"
                    >
                        See My Resume
                    </Button>
                </Box>
            </Flex>
        </Flex>
    );
}

export default About;
