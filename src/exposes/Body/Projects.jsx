import { useState, useEffect, useRef } from 'react';
import {
    Box, Container, Heading, Text, Flex, Image, IconButton
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const scrollRef = useRef(null);

    // Fetch projects based on NODE_ENV
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const isProduction = process.env.NODE_ENV === 'production';
                const url = isProduction
                    ? 'https://api-barbarpotato.vercel.app/projects/latest'
                    : '/data/project_latest.json';

                const response = await fetch(url);
                const data = await response.json();
                const mappedData = data.map(project => ({
                    id: project.project_id,
                    title: project.heading,
                    skillsUrl: project.skillsUrl,
                    image: project.imageUrl
                }));
                setProjects(mappedData);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 360;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box bg="#292b37" color="#faf9ff" pt={20} pb={16} overflow="hidden">
            <Container maxW="7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        justify="space-between"
                        align={{ base: 'flex-start', md: 'flex-end' }}
                        mb={10}
                    >
                        {/* Left: Heading block */}
                        <Box mb={{ base: 6, md: 0 }}>
                            <Text
                                fontFamily="'Outfit', sans-serif"
                                fontWeight="300"
                                fontSize={{ base: '3xl', md: '4xl' }}
                                letterSpacing="wide"
                                color="#c0c0c0"
                                lineHeight="1.2"
                            >
                                Lihat
                            </Text>

                            {/* Bold italic serif line with purple underline accent */}
                            <Box
                                display="inline-block"
                                position="relative"
                                fontFamily="'Playfair Display', serif"
                                fontWeight="800"
                                fontStyle="italic"
                                fontSize={{ base: '5xl', md: '6xl' }}
                                color="#faf9ff"
                                mt={1}
                            >
                                Konten Saya
                                <svg
                                    style={{
                                        position: 'absolute',
                                        bottom: '-10px',
                                        left: '0',
                                        width: '100%',
                                        height: '14px',
                                        pointerEvents: 'none',
                                    }}
                                    viewBox="0 0 200 14"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M 4,7 C 50,1 150,1 196,7"
                                        fill="none"
                                        stroke="#cc7bc9"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </Box>

                            <Text
                                color="#c0c0c0"
                                fontSize={{ base: 'md', md: 'lg' }}
                                fontFamily="'Outfit', sans-serif"
                                mt={6}
                            >
                                Seputar edukasi mengenai dunia development dan teknologi.
                            </Text>
                        </Box>

                        {/* Right: Prev / Next circular nav buttons */}
                        <Flex gap={3} alignItems="center">
                            <IconButton
                                aria-label="Scroll left"
                                icon={<FiArrowLeft />}
                                onClick={() => scroll('left')}
                                isRound
                                size="md"
                                bg="transparent"
                                border="2px solid"
                                borderColor="#866bab"
                                color="#866bab"
                                fontSize="lg"
                                _hover={{
                                    bg: '#866bab',
                                    color: '#faf9ff',
                                    transform: 'scale(1.08)',
                                }}
                                transition="all 0.2s ease"
                            />
                            <IconButton
                                aria-label="Scroll right"
                                icon={<FiArrowRight />}
                                onClick={() => scroll('right')}
                                isRound
                                size="md"
                                bg="transparent"
                                border="2px solid"
                                borderColor="#866bab"
                                color="#866bab"
                                fontSize="lg"
                                _hover={{
                                    bg: '#866bab',
                                    color: '#faf9ff',
                                    transform: 'scale(1.08)',
                                }}
                                transition="all 0.2s ease"
                            />
                        </Flex>
                    </Flex>
                </motion.div>
            </Container>

            {/* Horizontal scroll carousel — bleeds past container */}
            <Box
                ref={scrollRef}
                display="flex"
                overflowX="auto"
                gap={5}
                pl={{ base: '1rem', md: 'max(1rem, calc((100vw - 80rem) / 2 + 1rem))' }}
                pr={4}
                pb={4}
                sx={{
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        style={{ flex: '0 0 auto' }}
                    >
                        <Box
                            w={{ base: '360px', md: '480px' }}
                            bg="#383a4a"
                            borderRadius="8px"
                            overflow="hidden"
                            className="project-card"
                            display="flex"
                            flexDirection="column"
                            height="100%"
                        >
                            {/* Full-bleed image */}
                            <Box
                                h="300px"
                                overflow="hidden"
                                className="zoom-container"
                                flexShrink={0}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    objectFit="cover"
                                    w="full"
                                    h="full"
                                />
                            </Box>

                            {/* Card content */}
                            <Box
                                p={6}
                                display="flex"
                                flexDirection="column"
                                flex="1"
                                gap={5}
                            >
                                {/* Title */}
                                <Heading
                                    as="h3"
                                    fontFamily="'Playfair Display', serif"
                                    fontWeight="700"
                                    fontSize={{ base: '2xl', md: '3xl' }}
                                    lineHeight="1.35"
                                    color="#faf9ff"
                                    flex="1"
                                    transition="color 0.2s ease"
                                    _hover={{ color: '#cc7bc9' }}
                                >
                                    {project.title}
                                </Heading>

                                {/* View CTA — underlined link with arrow */}
                                <Box
                                    as="a"
                                    href={project.skillsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    display="inline-flex"
                                    alignItems="center"
                                    gap={1.5}
                                    color="#866bab"
                                    fontFamily="'Outfit', sans-serif"
                                    fontWeight="500"
                                    fontSize="md"
                                    borderBottom="1.5px solid"
                                    borderColor="#866bab"
                                    pb="2px"
                                    width="fit-content"
                                    _hover={{ color: '#cc7bc9', borderColor: '#cc7bc9' }}
                                    transition="all 0.2s ease"
                                >
                                    Lihat Konten&nbsp;
                                    <FiArrowRight />
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;