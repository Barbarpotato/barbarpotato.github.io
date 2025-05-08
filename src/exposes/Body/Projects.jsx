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
                    description: project.text,
                    image: project.imageUrl,
                    slug: project.slug // Assuming slug is available in the data
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
                <Flex direction={{ base: 'column', md: 'row' }} height={'100%'} justify="space-between" mb={8}>
                    <Box>
                        <Heading
                            size={{ base: '2xl', sm: '3xl', md: 'xl' }}
                            mb={2}
                            color="#faf9ff"
                        >
                            Recent Projects
                        </Heading>
                        <Text
                            color="#c0c0c0"
                            fontSize={{ base: 'lg', sm: 'xl', md: 'lg' }}
                        >
                            A showcase of my development work, side projects, and experiments.
                        </Text>
                    </Box>
                    <Button
                        as="a"
                        href="/Projects/"
                        variant="outline"
                        rightIcon={<FiArrowRight />}
                        mt={{ base: 4, md: 0 }}
                        borderColor="#faf9ff"
                        color="#faf9ff"
                        _hover={{ bg: '#383a4a' }}
                    >
                        See All Projects
                    </Button>
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
                                <Box overflow="hidden" aspectRatio={16 / 9}>
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
                                    <Heading as="h3" size="md" color="#faf9ff">
                                        {project.title}
                                    </Heading>
                                </CardHeader>
                                <CardBody flex="1">
                                    <Text color="#d0d0d0">{project.description}</Text>
                                    <Button
                                        as="a"
                                        href={`/Projects/${project.slug}`}
                                        variant="link"
                                        color="#866bab"
                                        alignSelf="flex-start"
                                        mt={4}
                                        rightIcon={<FiArrowRight />}
                                    >
                                        See Details
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