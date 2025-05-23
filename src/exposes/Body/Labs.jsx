import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Heading,
    Link as ChakraLink,
    Spinner,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const formatDate = (dateString) => {

    // Split the date and time based on the space character
    const [date, time] = dateString.split(' ');

    // Split the date into year, month, and day
    const [year, month, day] = date.split('-');

    // Create a new Date object using the extracted year, month, and day
    const formattedDate = new Date(year, month - 1, day); // months are 0-indexed in JS

    // Return the formatted date string in the desired format
    return formattedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};



const Labs = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = '';
        if (process.env.NODE_ENV === 'production') {
            url = 'https://api-barbarpotato.vercel.app/labs/latest';
        } else {
            url = '/data/blog_latest.json';
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setArticles(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading />;

    return (
        <Container maxW="7xl" bg="#292b37" color="#faf9ff" pt={20}>
            <Box className='stars'></Box>
            <Box className='stars2'></Box>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
                transition={{ duration: 0.6 }} // Duration of animation
            >
                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" mb={8}>

                    <Box>
                        <Heading
                            size={{ base: '2xl', sm: '3xl', md: 'xl' }} // Adjusting heading size based on screen size
                            mb={2}
                        >
                            Latest Labs Content
                        </Heading>
                        <Text
                            color="#c0c0c0"
                            fontSize={{ base: 'lg', sm: 'xl', md: 'lg' }} // Adjusting text size based on screen size
                        >
                            It's About Technical insights and development tutorials
                        </Text>
                    </Box>

                    <Button
                        as="a"
                        href="/Labs"
                        variant="outline"
                        rightIcon={<FiArrowRight />}
                        mt={{ base: 4, md: 0 }}
                        borderColor="#faf9ff"
                        color="#faf9ff"
                        _hover={{ bg: '#383a4a' }}
                    >
                        See More Contents
                    </Button>
                </Flex>
            </motion.div>

            {
                loading ? (
                    <Flex justify="center" mt={10}>
                        <Spinner size="lg" />
                    </Flex>
                ) : (
                    <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
                        {articles.map((article) => {
                            // Motion animation for each article item
                            return (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
                                    transition={{ duration: 0.6 }} // Duration of animation
                                >
                                    <Box
                                        className='project-card'
                                        bg="#383a4a"
                                        p={6}
                                        borderRadius="xl"
                                        shadow="md"
                                        transition="all 0.2s"
                                        display="flex"
                                        flexDirection="column"
                                    >
                                        <Stack
                                            spacing={2}
                                            mb={4}
                                            fontSize="sm"
                                            color="#c0c0c0"
                                            direction="row"
                                            align="center"
                                        >
                                            <FiCalendar />
                                            <Text as="time" dateTime={article.timestamp}>
                                                {formatDate(article.timestamp)}
                                            </Text>
                                            <Text mx={2}>•</Text>
                                        </Stack>
                                        <Heading size="md" noOfLines={2} mb={2}>
                                            <ChakraLink
                                                as="a"
                                                href={`/Labs-${article.index}/${article.slug}`}
                                                _hover={{ color: '#866bab' }}
                                            >
                                                {article.title}
                                            </ChakraLink>
                                        </Heading>
                                        <Text flex="1" color="#d0d0d0" noOfLines={3}>
                                            {article.short_description}
                                        </Text>
                                        <Button
                                            as="a"
                                            href={`/Labs-${article.index}/${article.slug}`}
                                            variant="link"
                                            color="#866bab"
                                            alignSelf="flex-start"
                                            mt={4}
                                            rightIcon={<FiArrowRight />}
                                        >
                                            Read More
                                        </Button>
                                    </Box>
                                </motion.div>
                            );
                        })}
                    </Grid>
                )
            }
        </Container >
    );
};

export default Labs;
