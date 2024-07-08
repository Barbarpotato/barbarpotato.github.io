import { Flex, Heading, Box, Image, Text } from '@chakra-ui/react'
import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { primaryFontColor, secondaryColor } from '../../theme/globalTheme'
import useWindowSize from '../../hooks/useWindowSize'

function Herolabs() {

    const { width } = useWindowSize()

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Update the current date every second
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    // Convert the current date to a string representing the date and time
    const dateTimeString = currentDate.toLocaleString();

    return (
        <Fragment>
            <Box style={{ marginInline: width > 768 ? '100px' : '20px' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <Heading fontSize={width < 768 ? '5xl' : '7xl'} color={primaryFontColor}><span style={{ color: secondaryColor }}>W</span>elcome to <span style={{ color: secondaryColor }}>M</span>y <span style={{ color: secondaryColor }}>P</span>ersonal <span style={{ color: secondaryColor }}>L</span>abs!</Heading>
                </motion.div>

                <Fragment>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <Flex alignItems={'center'} justifyContent={'center'} my={width >= 1280 ? 20 : 0} direction={width > 1280 ? 'row' : 'column'}>
                            <Image className='labs'
                                width={width >= 1280 ? '50%' : '100%'}
                                src='https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/blog-content%2FLabs_Hero_Image.png?alt=media&token=470a277f-497f-48d7-a186-ebf32014e074' />
                            <Box className='text-labs-hero' justifyContent={'center'} m={8}>
                                <Text color={primaryFontColor} opacity={0.7}>{dateTimeString}</Text>
                                <Text textAlign={'justify'} my={2} width={width > 1280 ? '80%' : '100%'} fontSize={width < 768 ? 'md' : 'lg'} opacity={0.7} color={primaryFontColor}>Hello, Welcome to my lab. This space covers a wide range of topics within the tech world, including the latest technological advancements, comprehensive coding tutorials, real-world work experiences, and personal perspectives.
                                    I explore cutting-edge trends in software development, AI, machine learning, blockchain, cloud computing, and more, aiming to provide a clear understanding of these technologies and their impact. I will write my joruney and my learning trough this labs.</Text>
                            </Box>
                        </Flex>
                    </motion.div>
                </Fragment>
            </Box >

        </Fragment >
    )
}

export default Herolabs