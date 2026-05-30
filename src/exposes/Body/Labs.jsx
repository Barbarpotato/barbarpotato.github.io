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
import { motion } from 'framer-motion';

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

    // Split articles: first half left column, second half right column
    const mid = Math.ceil(articles.length / 2);
    const leftArticles = articles.slice(0, mid);
    const rightArticles = articles.slice(mid);

    return (
        <Container maxW="7xl" bg="#292b37" color="#faf9ff" pt={20} pb={20}>
            <Box className='stars'></Box>
            <Box className='stars2'></Box>

            <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                gap={{ base: 10, md: 14 }}
                alignItems="start"
            >
                {/* ── LEFT COLUMN: heading + first batch of cards ── */}
                <Box>
                    {/* Section heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box mb={10}>
                            {/* "Konten" plain + "Blog" with SVG underline */}
                            <Text
                                fontFamily="'Playfair Display', serif"
                                fontWeight="800"
                                fontStyle="italic"
                                fontSize={{ base: '4xl', md: '5xl' }}
                                color="#faf9ff"
                                lineHeight="1.2"
                            >
                                Konten{' '}
                                <Box
                                    as="span"
                                    display="inline-block"
                                    position="relative"
                                    px="6px"
                                >
                                    Blog
                                    <svg
                                        style={{
                                            position: 'absolute',
                                            top: '-12px',
                                            left: '-8px',
                                            width: 'calc(100% + 16px)',
                                            height: 'calc(100% + 24px)',
                                            pointerEvents: 'none',
                                            overflow: 'visible',
                                        }}
                                        viewBox="0 0 100 40"
                                        preserveAspectRatio="none"
                                    >
                                        <ellipse
                                            cx="50"
                                            cy="20"
                                            rx="47"
                                            ry="18"
                                            fill="none"
                                            stroke="#cc7bc9"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </Box>
                            </Text>

                            {/* Second line — plain italic, no underline */}
                            <Box
                                fontFamily="'Playfair Display', serif"
                                fontWeight="800"
                                fontStyle="italic"
                                fontSize={{ base: '4xl', md: '5xl' }}
                                color="#faf9ff"
                                mt={3}
                                mb={4}
                            >
                                Terbaru
                            </Box>
                        </Box>
                    </motion.div>

                    {/* Left column article cards */}
                    <Stack spacing={5}>
                        {leftArticles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ArticleCard article={article} />
                            </motion.div>
                        ))}
                    </Stack>
                </Box>

                {/* ── RIGHT COLUMN: remaining cards, offset down for visual rhythm ── */}
                <Box mt={{ base: 0, md: 20 }}>
                    <Stack spacing={5}>
                        {rightArticles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
                            >
                                <ArticleCard article={article} />
                            </motion.div>
                        ))}

                        {/* "…and more!" trailing card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: rightArticles.length * 0.1 + 0.2 }}
                        >
                            <Box
                                className="project-card"
                                bg="#383a4a"
                                p={6}
                                borderRadius="xl"
                                shadow="md"
                            >
                                <Text
                                    fontFamily="'Playfair Display', serif"
                                    fontWeight="700"
                                    fontStyle="italic"
                                    fontSize="2xl"
                                    color="#faf9ff"
                                    mb={3}
                                >
                                    … dan masih banyak lagi!
                                </Text>
                                <Button
                                    as="a"
                                    href="/Labs"
                                    variant="link"
                                    color="#866bab"
                                    fontFamily="'Outfit', sans-serif"
                                    fontWeight="500"
                                    fontSize="md"
                                    rightIcon={<FiArrowRight />}
                                    _hover={{ color: '#cc7bc9' }}
                                    sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}
                                >
                                    Jelajahi semua blog
                                </Button>
                            </Box>
                        </motion.div>
                    </Stack>
                </Box>
            </Grid>
        </Container>
    );
};

/* ── Reusable article card ── */
const ArticleCard = ({ article }) => (
    <Box
        className="project-card"
        bg="#383a4a"
        p={6}
        borderRadius="xl"
        shadow="md"
        display="flex"
        flexDirection="column"
        gap={3}
    >
        {/* Date */}
        <Stack spacing={2} fontSize="sm" color="#c0c0c0" direction="row" align="center">
            <FiCalendar />
            <Text fontFamily="'Outfit', sans-serif" as="time" dateTime={article.timestamp}>
                {formatDate(article.timestamp)}
            </Text>
        </Stack>

        {/* Title */}
        <Heading
            size="xl"
            noOfLines={2}
            fontFamily="'Playfair Display', serif"
            fontWeight="700"
            fontSize={{ base: 'xl', md: '2xl' }}
            color="#faf9ff"
            lineHeight="1.35"
        >
            <ChakraLink
                as="a"
                href={`/Labs-${article.index}/${article.slug}`}
                _hover={{ color: '#cc7bc9', textDecoration: 'none' }}
                transition="color 0.2s ease"
            >
                {article.title}
            </ChakraLink>
        </Heading>

        {/* Description */}
        <Text color="#d0d0d0" noOfLines={3} fontSize="md" lineHeight="1.7">
            {article.short_description}
        </Text>

        {/* CTA */}
        <Button
            as="a"
            href={`/Labs-${article.index}/${article.slug}`}
            variant="link"
            color="#866bab"
            alignSelf="flex-start"
            rightIcon={<FiArrowRight />}
            fontFamily="'Outfit', sans-serif"
            fontWeight="500"
            fontSize="md"
            _hover={{ color: '#cc7bc9' }}
            sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}
        >
            Baca selengkapnya
        </Button>
    </Box>
);

export default Labs;
