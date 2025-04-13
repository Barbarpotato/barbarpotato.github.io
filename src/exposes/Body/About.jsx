import React, { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    Flex,
    Stack,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Progress,
    Badge,
    Button,
    Grid,
    GridItem,
    VStack,
    HStack,
    Icon,
    Card,
    CardBody,
} from '@chakra-ui/react';
import {
    FaCode,
    FaServer,
    FaMobileAlt,
    FaChartBar,
    FaBrain,
    FaRocket,
    FaLightbulb,
    FaStar,
} from 'react-icons/fa';

const About = () => {
    const [activeTab, setActiveTab] = useState('story');

    const skills = [
        { name: 'Programming & Development', level: 90, color: 'yellow.400' },
        { name: 'Software Development Practices', level: 85, color: 'blue.600' },
        { name: 'System Design & Architecture', level: 80, color: 'red.500' },
        { name: 'DevOps and Infrastructure', level: 75, color: 'green.500' },
        { name: 'Data and AI', level: 70, color: 'purple.500' },
    ];

    const interests = [
        {
            icon: FaBrain,
            name: 'AI & Machine Learning',
            color: 'purple',
            description: 'Diving deep into the world of artificial intelligence and machine learning, where I explore algorithms, neural networks, and data-driven models to create systems that can learn, adapt, and make intelligent decisions to solve complex real-world problems.'
        },
        {
            icon: FaRocket,
            name: 'Keep Learning',
            color: 'blue',
            description: 'Committing to a lifelong journey of personal and professional growth by constantly seeking out new skills, perspectives, and knowledge across diverse fields, ensuring I stay curious and adaptable in an ever-evolving technological landscape.'
        },
        {
            icon: FaLightbulb,
            name: 'Innovation',
            color: 'yellow',
            description: 'Fueling progress by embracing bold ideas and thinking outside the box, I strive to develop groundbreaking solutions that challenge conventional approaches and spark transformative change in technology and beyond.'
        },
        {
            icon: FaStar,
            name: 'Cyber Security',
            color: 'pink',
            description: 'Safeguarding the digital world by mastering the art and science of cyber security, I focus on protecting systems, networks, and data from threats through advanced techniques, ethical hacking, and proactive strategies to ensure trust and resilience in an interconnected age.'
        }
    ];

    return (
        <Box
            as="section"
            id="about"
            py={20}
        >
            <Container maxW="container.xl">

                <Heading
                    id="aboutme"
                    opacity={0.8}
                    mt={4}
                    mb={10}
                    color="#faf9ff"
                    textAlign={'center'}
                >
                    <span style={{ color: "#bd93f9" }}>{"<"}</span>
                    About Me
                    <span style={{ color: "#bd93f9" }}>{' />'}</span>
                </Heading>

                <Grid templateColumns={{ base: '1fr', lg: '1fr 2fr' }} gap={8}>
                    {/* Left Column - Profile Card */}
                    <GridItem>
                        <Card
                            boxShadow={'2xl'}
                            backgroundColor={"#292b37"}
                            borderRadius="2xl"
                            overflow="hidden"
                            position="relative"
                            bg="white"
                            transition="all 0.3s"
                            _hover={{ shadow: '0px 10px 25px #cc7bc9;' }}
                        >
                            <Box
                                position="absolute"
                                top="-40px"
                                right="-40px"
                                w="160px"
                                h="160px"
                                bg="blue.500"
                                borderRadius="full"
                                opacity={0.1}
                            />
                            <Box
                                position="absolute"
                                bottom="-32px"
                                left="-32px"
                                w="128px"
                                h="128px"
                                bg="purple.500"
                                borderRadius="full"
                                opacity={0.1}
                            />

                            <CardBody p={6}>
                                <Image
                                    src="/images/Avatar.webp"
                                    alt="Profile"
                                    w="full"
                                    h="320px"
                                    objectFit="cover"
                                    borderRadius="xl"
                                    shadow="md"
                                    mb={6}
                                    transition="transform 0.3s"
                                    _hover={{ transform: 'scale(1.02)' }}
                                />

                                <Heading
                                    as="h3"
                                    size="lg"
                                    mb={2}
                                    color={'white'}
                                >
                                    Darmawan
                                </Heading>
                                <Text color="gray.300" fontWeight="medium" mb={4}>
                                    Software Engineer
                                </Text>

                                <HStack wrap="wrap" spacing={2} mb={6}>
                                    <Badge colorScheme="blue" px={3} py={1} borderRadius="full">
                                        R&D
                                    </Badge>
                                    <Badge colorScheme="green" px={3} py={1} borderRadius="full">
                                        Accelerator
                                    </Badge>
                                    <Badge colorScheme="purple" px={3} py={1} borderRadius="full">
                                        Problem Solving
                                    </Badge>
                                    <Badge colorScheme="yellow" px={3} py={1} borderRadius="full">
                                        Software Architect
                                    </Badge>
                                    <Badge colorScheme="red" px={3} py={1} borderRadius="full">
                                        System Design
                                    </Badge>
                                </HStack>

                                <Flex justify="center">
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
                                        w={'100%'}
                                    >
                                        My Resume
                                    </Button>
                                </Flex>
                            </CardBody>
                        </Card>
                    </GridItem>

                    {/* Right Column - Interactive Content */}
                    <GridItem>
                        {/* Tabs Navigation */}
                        <Tabs
                            variant="line"
                            colorScheme="purple"
                            index={['story', 'skills', 'experience', 'interests'].indexOf(activeTab)}
                            onChange={(index) =>
                                setActiveTab(['story', 'skills', 'experience', 'interests'][index])
                            }
                        >
                            <TabList>
                                <Tab
                                    fontWeight="medium"
                                    _selected={{ color: 'pink.400', borderBottomWidth: '2px' }}
                                    whiteSpace="nowrap"
                                >
                                    Summary
                                </Tab>
                                <Tab
                                    fontWeight="medium"
                                    _selected={{ color: 'pink.400', borderBottomWidth: '2px' }}
                                    whiteSpace="nowrap"
                                >
                                    Skills
                                </Tab>
                                <Tab
                                    fontWeight="medium"
                                    _selected={{ color: 'pink.400', borderBottomWidth: '2px' }}
                                    whiteSpace="nowrap"
                                >
                                    Interests
                                </Tab>
                            </TabList>

                            {/* Tab Content */}
                            <TabPanels>
                                {/* My Story Tab */}
                                <TabPanel p={8} boxShadow={'dark-lg'}
                                    _hover={{ shadow: '0px 10px 25px #cc7bc9;' }}
                                    backgroundColor={"#292b37"} borderRadius="2xl" minH="400px">

                                    <Heading
                                        as="h3"
                                        size="lg"
                                        mb={6}
                                        bgGradient="linear(to-r, pink.600, purple.600)"
                                        bgClip="text"
                                    >
                                        Summary
                                    </Heading>

                                    <Text color="white" mb={4} lineHeight="relaxed">
                                        Hi, I’m Darma, a Software Engineer who builds efficient, scalable solutions.
                                        I adapt fast to new tech and project shifts, making me a strong team player. I dive into challenges, learn quickly, and deliver what’s needed.
                                    </Text>

                                    <Text color="white" mb={4} lineHeight="relaxed">
                                        I’m passionate about R&D, exploring new tools and methods to solve problems.
                                        Whether prototyping features or boosting performance, I focus on practical results and future-ready innovation.
                                    </Text>

                                    <Text color="white" lineHeight="relaxed">
                                        I love acting as an accelerator for other teams. By bridging gaps between technical and non-technical stakeholders, I translate complex requirements into actionable plans, fostering alignment and momentum
                                    </Text>

                                    <Box
                                        my={6}
                                        p={4}
                                        bg="purple.100"
                                        borderLeftWidth={4}
                                        borderColor="pink.500"
                                        borderRadius="md"
                                        fontStyle="italic"
                                        color="gray.700"
                                    >
                                        "Software engineering isn’t just about mastering code—it’s about adapting to everything else: new tools, shifting priorities, and the people who bring it all together"
                                    </Box>
                                </TabPanel>

                                {/* Skills Tab */}
                                <TabPanel
                                    p={8} bg="white"
                                    boxShadow={'dark-lg'} _hover={{ shadow: '0px 10px 25px #cc7bc9;' }}
                                    backgroundColor={"#292b37"} borderRadius="2xl" minH="400px">
                                    <Heading
                                        as="h3"
                                        size="lg"
                                        mb={6}
                                        bgGradient="linear(to-r, pink.600, purple.600)"
                                        bgClip="text"
                                    >
                                        Technical Expertise
                                    </Heading>

                                    <VStack spacing={6} align="stretch">
                                        {skills.map((skill) => (
                                            <Box key={skill.name}>
                                                <Flex justify="space-between" mb={2}>
                                                    <Text fontWeight="medium" color="gray.200">
                                                        {skill.name}
                                                    </Text>
                                                    <Text color="gray.500">{skill.level}%</Text>
                                                </Flex>
                                                <Progress
                                                    value={skill.level}
                                                    colorScheme={skill.color.split('.')[0]}
                                                    size="sm"
                                                    borderRadius="full"
                                                    hasStripe
                                                    transition="width 1.5s ease-out"
                                                />
                                            </Box>
                                        ))}
                                    </VStack>
                                </TabPanel>

                                {/* Interests Tab */}
                                <TabPanel p={8} bg="white"
                                    boxShadow={'dark-lg'} _hover={{ shadow: '0px 10px 25px #cc7bc9;' }}
                                    backgroundColor={"#292b37"} borderRadius="2xl" minH="400px">
                                    <Heading
                                        as="h3"
                                        size="lg"
                                        mb={6}
                                        bgGradient="linear(to-r, pink.600, purple.600)"
                                        bgClip="text"
                                    >
                                        Interests
                                    </Heading>

                                    <Grid
                                        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                                        gap={6}
                                    >
                                        {interests.map((interest, index) => (
                                            <Card
                                                key={index}
                                                p={5}
                                                shadow="sm"
                                                borderWidth={1}
                                                borderColor="gray.100"
                                                borderRadius="xl"
                                                _hover={{ shadow: 'md' }}
                                                transition="all 0.3s"
                                            >
                                                <HStack spacing={4}>
                                                    <Box
                                                        p={3}
                                                        bg={`${interest.color}.100`}
                                                        borderRadius="lg"
                                                        color={`${interest.color}.600`}
                                                    >
                                                        <Icon as={interest.icon} boxSize={5} />
                                                    </Box>
                                                    <VStack align="start">
                                                        <Heading color={"gray.200"} as="h4" size="md" mb={2}>
                                                            {interest.name}
                                                        </Heading>
                                                        <Text color="gray.400">
                                                            {interest.description}
                                                        </Text>
                                                    </VStack>
                                                </HStack>
                                            </Card>
                                        ))}
                                    </Grid>

                                    <Box
                                        mt={8}
                                        p={5}
                                        bgGradient="linear(to-r, pink.100, pink.200)"
                                        borderRadius="xl"
                                    >
                                        <Heading color={"#ff79c6"} as="h4" size="md" mb={2}>
                                            What Drives Me
                                        </Heading>
                                        <Text color="gray.700">
                                            I'm driven by the intersection of technology and human experience. I
                                            believe the best solutions come from understanding people's needs and
                                            crafting technology that feels intuitive and empowering.
                                        </Text>
                                    </Box>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                        {/* What I Do Section */}
                        <Grid
                            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                            gap={6}
                            mt={8}
                        >
                            <Card
                                boxShadow={'dark-lg'}
                                borderRadius="2xl"
                                p={6}
                                _hover={{ shadow: '0px 10px 25px #cc7bc9;' }}
                                transition="all 0.3s"
                                className='lighting-effect-pink'
                            >
                                <CardBody>
                                    <HStack spacing={4} mb={4}>
                                        <Box bg="blue.100" p={2} borderRadius="lg" color="blue.600">
                                            <Icon as={FaCode} boxSize={5} />
                                        </Box>
                                        <Heading color={'white'} as="h3" size="md">
                                            Web Development
                                        </Heading>
                                    </HStack>
                                    <Text color="gray.400">
                                        Creating responsive, accessible, and performant web applications with
                                        modern frameworks and best practices.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card
                                boxShadow={'dark-lg'}
                                borderRadius="2xl"
                                p={6}
                                _hover={{ shadow: '0px 10px 25px #cc7bc9;' }}
                                transition="all 0.3s"
                            >
                                <CardBody>
                                    <HStack spacing={4} mb={4}>
                                        <Box bg="purple.100" p={2} borderRadius="lg" color="purple.600">
                                            <Icon as={FaServer} boxSize={5} />
                                        </Box>
                                        <Heading color={'white'} as="h3" size="md">
                                            Backend Solutions
                                        </Heading>
                                    </HStack>
                                    <Text color="gray.400">
                                        Designing robust APIs, database architectures, and server-side systems
                                        that power seamless experiences.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card
                                boxShadow={'dark-lg'}
                                borderRadius="2xl"
                                p={6}
                                _hover={{ shadow: '0px 10px 25px #cc7bc9;' }}
                                transition="all 0.3s"
                            >
                                <CardBody>
                                    <HStack spacing={4} mb={4}>
                                        <Box bg="green.100" p={2} borderRadius="lg" color="green.600">
                                            <Icon as={FaMobileAlt} boxSize={5} />
                                        </Box>
                                        <Heading color={'white'} as="h3" size="md">
                                            Mobile Development
                                        </Heading>
                                    </HStack>
                                    <Text color="gray.400">
                                        Building cross-platform mobile applications that deliver native-like
                                        experiences with a single codebase.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card boxShadow={'dark-lg'}
                                borderRadius="2xl"
                                p={6}
                                _hover={{ shadow: '0px 10px 25px #cc7bc9;' }}
                                transition="all 0.3s"
                            >
                                <CardBody>
                                    <HStack spacing={4} mb={4}>
                                        <Box bg="orange.100" p={2} borderRadius="lg" color="orange.600">
                                            <Icon as={FaChartBar} boxSize={5} />
                                        </Box>
                                        <Heading color={'white'} as="h3" size="md">
                                            Technical Leadership
                                        </Heading>
                                    </HStack>
                                    <Text color="gray.400">
                                        Leading development teams, establishing best practices, and optimizing
                                        workflows for efficiency and quality.
                                    </Text>
                                </CardBody>
                            </Card>
                        </Grid>
                    </GridItem>
                </Grid>
            </Container >
        </Box >
    );
};

export default About;