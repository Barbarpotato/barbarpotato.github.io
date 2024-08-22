import { Flex, Heading, Box, Image, Text } from '@chakra-ui/react';
import { useState, useEffect, Fragment, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { primaryFontColor } from '../../../theme/globalTheme';
import useWindowSize from '../../../hooks/useWindowSize';

const Herolabs = () => {
    const { width } = useWindowSize();

    const [currentDate, setCurrentDate] = useState(() => new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const dateTimeString = useMemo(() => currentDate.toLocaleString(), [currentDate]);

    return (
        <Fragment>
            <Box style={{ marginInline: width > 768 ? '12%' : '20px' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <Flex alignItems={'center'} justifyContent={'center'} my={width >= 1280 ? 20 : 0} direction={width > 1280 ? 'row' : 'column'}>
                        <Image className='labs'
                            width={width >= 1280 ? '50%' : "400px"}
                            src='https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/blog-content%2FLabs_Hero_Image.png?alt=media&token=470a277f-497f-48d7-a186-ebf32014e074'
                            loading="lazy"
                            alt={"Darmawan's Lab"}
                        />
                        <Box className='text-labs-hero' justifyContent={'center'} m={width > 1280 ? 8 : 0}>
                            <Heading my={5} fontSize={width < 768 ? '3xl' : '5xl'} color={primaryFontColor}>Welcome to My Personal Labs!</Heading>
                            <Text color={primaryFontColor} opacity={0.7}>{dateTimeString}</Text>
                            <Text textAlign={'justify'} my={2} width={width > 1280 ? '80%' : '100%'} fontSize={width < 768 ? 'md' : 'lg'} opacity={0.7} color={primaryFontColor}>
                                Hello, Welcome to my lab. This space covers a wide range of topics within the tech world, including the latest technological advancements, comprehensive coding tutorials, real-world work experiences, and personal perspectives.
                                I explore cutting-edge trends in software development, AI, machine learning, blockchain, cloud computing, and more, aiming to provide a clear understanding of these technologies and their impact. I will write my journey and my learning through this labs.
                            </Text>
                        </Box>
                    </Flex>
                </motion.div>
            </Box>
        </Fragment>
    );
};

export default memo(Herolabs);