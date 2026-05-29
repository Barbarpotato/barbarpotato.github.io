import { useState, useEffect } from 'react';
import {
    Box, Container, Heading, Text, SimpleGrid, Card, CardHeader, Flex,
    CardBody, Image, Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Projects = () => {
    const [projects, setProjects] = useState([]);

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
                // Map data to match expected structure
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

    return (
        <Container maxW="7xl" bg="#292b37" color="#faf9ff" pt={20}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <Flex direction={{ base: 'column', md: 'row' }} height={'100%'} justify="space-between">
                    <Box mb={{ base: 6, md: 0 }}>
                        <Heading
                            mb={2}
                            color="#faf9ff"
                            lineHeight="1.1"
                        >
                            <Text
                                as="span"
                                display="block"
                                fontFamily="'Outfit', sans-serif"
                                fontWeight="300"
                                fontSize={{ base: "2xl", md: "3xl" }}
                                letterSpacing="wide"
                                color="#c0c0c0"
                            >
                                Lihat
                            </Text>
                            <Box
                                as="span"
                                display="inline-block"
                                position="relative"
                                fontFamily="'Playfair Display', serif"
                                fontWeight="800"
                                fontSize={{ base: "4xl", md: "5xl" }}
                                color="#faf9ff"
                                mt={1}
                                px={4}
                            >
                                Konten Saya
                                <svg
                                    style={{
                                        position: 'absolute',
                                        top: '-15%',
                                        left: '-5%',
                                        width: '110%',
                                        height: '130%',
                                        pointerEvents: 'none',
                                    }}
                                    viewBox="0 0 100 50"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M 5,25 C 10,5 95,2 97,25 C 99,48 5,48 3,30 C 1,12 85,8 95,20"
                                        fill="none"
                                        stroke="#cc7bc9"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Box>
                        </Heading>
                        <Text
                            color="#c0c0c0"
                            fontSize={{ base: 'lg', sm: 'xl', md: 'lg' }}
                        >
                            Seputar edukasi mengenai dunia development dan teknologi.
                        </Text>
                    </Box>
                </Flex>
            </motion.div>

            <Container maxW="container.xl" py={12}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card
                                height={"100%"}
                                boxShadow={"dark-lg"}
                                overflow="hidden"
                                transition="all 0.3s"
                                display="flex"
                                flexDirection="column"
                                bg="#383a4a"
                                className='project-card'
                                color="#faf9ff"
                                borderRadius="xl"
                            >
                                <Box h={{ base: "260px", md: "360px" }} overflow="hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        objectFit="cover"
                                        w="full"
                                        h="full"
                                        transition="transform 0.3s"
                                        _hover={{ transform: 'scale(1.05)' }}
                                    />
                                </Box>
                                <CardHeader>
                                    <Heading
                                        as="h3"
                                        fontSize="2xl"
                                        fontFamily="'Playfair Display', serif"
                                        fontWeight="700"
                                        lineHeight="1.2"
                                        letterSpacing="-0.02em"
                                        color="#faf9ff"
                                        transition="color 0.2s ease-in-out"
                                        _hover={{ color: "#cc7bc9" }}
                                    >
                                        {project.title}
                                    </Heading>
                                </CardHeader>
                                <CardBody>

                                    <Button
                                        as="a"
                                        target='_blank'
                                        href={`${project.skillsUrl}`}
                                        variant="link"
                                        color="#866bab"
                                        alignSelf="flex-start"
                                        rightIcon={<FiArrowRight />}
                                    >
                                        Lihat Konten
                                    </Button>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </SimpleGrid>
            </Container>
        </Container>
    );
};

export default Projects;