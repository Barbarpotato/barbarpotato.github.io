import { Heading, Box, Flex, Image, Text, Badge } from '@chakra-ui/react'
import { primaryColor, primaryFontColor } from '../../theme/globalTheme'
import React, { Fragment, useEffect } from 'react'
import { Chrono } from 'react-chrono';
import { motion } from 'framer-motion'

const customContentDesktop = [
    <Flex role="region" aria-labelledby="pt-samamaju-prima-heading">
        <Box>
            <Image
                alt="Kurniawan"
                width="300px"
                height="150px"
                src="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fkurniawan.webp?alt=media&token=3684e683-1b96-4840-af84-4b2295ee7991"
            />
        </Box>
        <Box m={5}>
            <Heading id="pt-samamaju-prima-heading" fontSize="2xl" color={primaryFontColor}>
                PT. Samamaju Prima
                <Badge fontSize="0.6em" colorScheme="purple">Software Engineer</Badge>
            </Heading>
            <Text color={primaryFontColor} opacity={0.5} fontWeight="bold">by Kurniawan Group</Text>
            <Text fontSize="xl" fontWeight="bold" color={primaryFontColor} my={4}>The responsibilities include:</Text>
            <ul style={{ marginLeft: '20px', color: 'white' }}>
                <li>Design, Build, Testing and Maintain software for internal company use.</li>
                <li>Using programming language PHP and MySQL</li>
                <li>Using internal company Model View Controller (MVC) framework engine called Ingrid.</li>
            </ul>
        </Box>
    </Flex>,
    <Flex role="region" aria-labelledby="nocode-magician-heading">
        <Box>
            <Image
                alt="Nocode"
                width="300px"
                height="150px"
                src="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fnocode.png?alt=media&token=56103f52-ed60-4914-9c07-d856abb74bb0"
            />
        </Box>
        <Box m={5}>
            <Heading id="nocode-magician-heading" fontSize="3xl" color={primaryFontColor}>
                Nocode Magician
                <Badge fontSize="0.6em" colorScheme="purple">Front-End Developer</Badge>
            </Heading>
            <Text color={primaryFontColor} opacity={0.5} fontWeight="bold">by Pipeline Marketing Technology</Text>
            <Text fontSize="xl" fontWeight="bold" color={primaryFontColor} my={4}>The responsibilities include:</Text>
            <ul style={{ marginLeft: '20px', color: 'white' }}>
                <li>Building React.js Web application relevant to payment integrations</li>
                <li>Implementing applications based on user login, OTP validation for user login</li>
                <li>Building Dashboard Web Applications that represent all the data visualizations</li>
                <li>Contributing to WordPress application development with complex tasks using the Oxygen plugin</li>
            </ul>
        </Box>
    </Flex>,
    <Flex role="region" aria-labelledby="yamali-tb-heading">
        <Box>
            <Image
                alt="Yamali TB"
                width="300px"
                height="150px"
                src="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fbcf.webp?alt=media&token=d410cdbe-224c-41e8-abf3-81ae88e72f29"
            />
        </Box>
        <Box m={5}>
            <Heading id="yamali-tb-heading" fontSize="3xl" color={primaryFontColor}>
                YAMALI TB
                <Badge fontSize="0.6em" colorScheme="purple">IT & Database</Badge>
            </Heading>
            <Text color={primaryFontColor} opacity={0.5} fontWeight="bold">by Bakrie Center Foundation</Text>
            <Text fontSize="xl" fontWeight="bold" color={primaryFontColor} my={4}>The responsibilities include:</Text>
            <ul style={{ marginLeft: '20px', color: 'white' }}>
                <li>Building the Interface of the Content Management System Dashboard of YAMALI TB Using React.js.</li>
                <li>Managing the content website of YAMALI TB, such as adding, removing, and editing content, and adding, editing, and deleting Tuberculosis disease cases for visualization on the YAMALI TB Website.</li>
                <li>Working with data representation & data management using MySQL and PHP programming languages.</li>
            </ul>
        </Box>
    </Flex>,
    <Flex role="region" aria-labelledby="bangkit-academy-heading">
        <Box>
            <Image
                alt="Bangkit"
                width="500px"
                height="150px"
                src="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/portofolio%2Fexperiences%2Fbangkit.webp?alt=media&token=877ecb68-92e6-4beb-ad66-37490ef6bb84"
            />
        </Box>
        <Box m={5}>
            <Heading id="bangkit-academy-heading" fontSize="3xl" color={primaryFontColor}>
                Bangkit Academy
                <Badge fontSize="0.6em" colorScheme="purple">Machine Learning Path Cohort</Badge>
            </Heading>
            <Text color={primaryFontColor} opacity={0.5} fontWeight="bold">by Google, GoTo, Traveloka</Text>
            <Text fontSize="xl" fontWeight="bold" color={primaryFontColor} my={4}>The responsibilities include:</Text>
            <ul style={{ marginLeft: '20px', color: 'white' }}>
                <li>Learning the key concepts and applications of AI to solve a wide range of ML problems with these specializations: Google IT Automation with Python, Google Data Analytics, Math for Machine Learning, Machine Learning Specialization, DeepLearning.AI TensorFlow Developer Professional Certificate, DeepLearning.AI TensorFlow Data and Deployment.</li>
            </ul>
        </Box>
    </Flex>
];

const customContentMobile = [
    <Fragment key="kurniawan-mobile">
        <Box p={4}>
            <Heading fontSize="2xl" color={primaryFontColor}>
                PT. Samamaju Prima
                <Badge fontSize="0.6em" colorScheme="purple">Software Engineer</Badge>
            </Heading>
            <Text color={primaryFontColor} opacity={0.5} fontWeight="bold">by Kurniawan Group</Text>
            <Text color={primaryFontColor} my={4}>November 2023 - Present</Text>
            <Text fontSize="lg" fontWeight="bold" color={primaryFontColor} my={4}>The responsibilities include:</Text>
            <ul style={{ marginLeft: '20px', color: 'white' }}>
                <li>Design, Build, Testing and Maintain software for internal company used.</li>
                <li>Using programming language PHP and MySQL.</li>
                <li>Using internal company Model View Controller (MVC) framework engine call Ingrid.</li>
            </ul>
        </Box>
    </Fragment>,
    <Fragment key="nocode-mobile">
        <Box m={5}>
            <Heading fontSize="2xl" color={primaryFontColor}>
                Nocode Magician
                <Badge fontSize="0.6em" colorScheme="purple">Front-End Developer</Badge>
            </Heading>
            <Text color={primaryFontColor} opacity={0.5} fontWeight="bold">by Pipeline Marketing Technology</Text>
            <Text color={primaryFontColor} my={4}>March 2023 - December 2023</Text>
            <Text fontSize="lg" fontWeight="bold" color={primaryFontColor} my={4}>The responsibilities include:</Text>
            <ul style={{ marginLeft: '20px', color: 'white' }}>
                <li>Building React.js Web application that relevant with payment integrations.</li>
                <li>Implement application that based on user login, OTP validation for user login.</li>
                <li>Build Dashboard Web Application that represent all the data visualization.</li>
                <li>Contribute with Wordpress application development with complex task using Oxygen plugin.</li>
            </ul>
        </Box>
    </Fragment>,
    <Fragment key="yamali-tb-mobile" boxShadow="dark-lg" className="lighting-effect-blue" w="80%" borderRadius="xl" mx={2} my={10} backgroundColor={primaryColor}>
        <Box m={5}>
            <Heading fontSize="2xl" color={primaryFontColor}>
                YAMALI TB
                <Badge fontSize="0.6em" colorScheme="purple">IT & Database</Badge>
            </Heading>
            <Text color={primaryFontColor} opacity={0.5} fontWeight="bold">by Bakrie Center Foundation</Text>
            <Text color={primaryFontColor} my={4}>January 2023 - Present</Text>
            <Text fontSize="lg" fontWeight="bold" color={primaryFontColor} my={4}>The responsibilities include:</Text>
            <ul style={{ marginLeft: '20px', color: 'white' }}>
                <li>Building the Interface of the Content Management System Dashboard of YAMALI TB Using React.js.</li>
                <li>Manage the content website of YAMALI TB, such as adding content, removing content, editing content, and adding, editing, deleting Tuberculosis disease case for the visualization from the YAMALI TB Website.</li>
                <li>Help Working with Data representation & Data management using MySQL and PHP programming languages.</li>
            </ul>
        </Box>
    </Fragment>,
    <Fragment key="bangkit-mobile">
        <Box m={5}>
            <Heading fontSize="2xl" color={primaryFontColor}>
                Bangkit Academy
                <Badge fontSize="0.6em" colorScheme="purple">Machine Learning Path Cohort</Badge>
            </Heading>
            <Text color={primaryFontColor} opacity={0.5} fontWeight="bold">by Google, GoTo, Traveloka</Text>
            <Text color={primaryFontColor} my={4}>January 2023 - December 2023</Text>
            <Text fontSize="lg" fontWeight="bold" color={primaryFontColor} my={4}>The responsibilities include:</Text>
            <ul style={{ marginLeft: '20px', color: 'white' }}>
                <li>Learn the key concepts and applications of AI to solve a wide range of ML problems with these specializations: Google IT Automation with Python, Google Data Analytics, Math for Machine Learning, Machine Learning Specialization, DeepLearning.AI TensorFlow Developer Professional Certificate, DeepLearning.AI Tensorflow Data and Deployment.</li>
            </ul>
        </Box>
    </Fragment>
];


function Experience({ width }) {

    useEffect(() => {
        // Query the element to remove the toolbar timeline component
        const timeLineComponent = document.querySelector('.ToolbarWrapper-sc-cif21b-6');

        // Check if the element exists and then remove it
        if (timeLineComponent) {
            timeLineComponent.remove();
        }
    });

    const itemsTimeline = [
        {
            title: "November 2023 - Present"
        },
        {
            title: "March 2023 - December 2023"
        },
        {
            title: "August 2022 - December 2022"
        },
        {
            title: "February 2022 - July 2022"
        }
    ];

    return (
        <Fragment>
            {/* // ** DESKTOP & TABLET SCREEN SIZE  */}
            {width >= 768 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    role="region" // Optional, can be used for defining a section of the page
                    aria-labelledby="experience-heading" // Links the heading with the section
                >
                    <Heading
                        id="experience-heading" // ID for linking with aria-labelledby
                        pt={20}
                        pb={10}
                        textAlign={'center'}
                        opacity={0.8}
                        color={primaryFontColor}
                    >
                        <span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}</span>
                        My Experience
                        <span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                    </Heading>
                    <Chrono
                        parseDetailsAsHTML
                        items={itemsTimeline}
                        theme={{
                            primary: "violet",
                            secondary: "#292b37",
                            cardBgColor: "#292b37",
                            titleColor: "#bd93f9",
                            cardTitleColor: "violet",
                            toolbarBgColor: "#292b37",
                            toolbarBtnBgColor: "violet",
                            toolbarTextColor: "violet",
                            titleColorActive: "violet",
                        }}
                        mode="VERTICAL_ALTERNATING"
                        itemWidth={150}
                        aria-label="Timeline of experiences" // Provides a label for screen readers
                    >
                        {customContentDesktop}
                    </Chrono>
                </motion.div>

            )
            }

            {/* // ** MOBILE SCREEN SIZE  */}
            {
                width < 768 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        role="region" // Defines a region of the page
                        aria-labelledby="experience-heading" // Links the heading to this region
                    >
                        <Heading
                            id="experience-heading" // ID to link with aria-labelledby
                            pt={20}
                            pb={10}
                            textAlign={'center'}
                            opacity={0.8}
                            color={primaryFontColor}
                            role="heading" // Explicitly define the heading role
                            aria-level={1} // Define the level of the heading
                        >
                            <span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}</span>
                            My Experience
                            <span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                        </Heading>
                        <Chrono
                            parseDetailsAsHTML
                            items={itemsTimeline}
                            theme={{
                                primary: "violet",
                                secondary: "#292b37",
                                cardBgColor: "#292b37",
                                titleColor: "#bd93f9",
                                cardTitleColor: "violet",
                                toolbarBgColor: "#292b37",
                                toolbarBtnBgColor: "violet",
                                toolbarTextColor: "violet",
                                titleColorActive: "violet",
                            }}
                            mode="VERTICAL_ALTERNATING"
                            itemWidth={150}
                            aria-label="Timeline of experiences" // Descriptive label for the timeline
                        >
                            {customContentMobile}
                        </Chrono>
                    </motion.div>
                )
            }
        </Fragment >
    )
}

export default Experience