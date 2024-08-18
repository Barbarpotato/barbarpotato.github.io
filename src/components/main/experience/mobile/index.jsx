import { Heading, Box, Text, Badge } from '@chakra-ui/react'
import { primaryFontColor, primaryColor } from '../../../../theme/globalTheme';
import React, { Fragment, useEffect } from 'react'
import { Chrono } from 'react-chrono';

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

function Experience({ itemsTimeline }) {

    useEffect(() => {
        // Query the element to remove the toolbar timeline component
        const timeLineComponent = document.querySelector('.ToolbarWrapper-sc-cif21b-6');

        // Check if the element exists and then remove it
        if (timeLineComponent) {
            timeLineComponent.remove();
        }
    });

    return (
        <Fragment>

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
                <span>{"<"}</span>
                My Experience
                <span>{'>'}</span>
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

        </Fragment >
    )
}

export default Experience