import { Fragment, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { motion } from 'framer-motion'
import { primaryFontColor, ternaryColor } from '../../theme/globalTheme'
import { Box, Text, Input, Flex, Button, Heading } from '@chakra-ui/react'
import Navigation from '../../components/navigation/index'
import { useDatablogs } from '../../api/blog'
import Herolabs from '../../components/labs/hero/index'
import ChatbotButton from '../../components/chatbot/ChatbotButton'
import Content from '../../components/labs/content/index'
import Footer from '../../components/footer/index'
import Loading from '../../components/loading/index'

function Labs() {

    const { width } = useWindowSize()

    const [searchQuery, setSearchQuery] = useState("");

    const { data: blogs, isLoading, isError, refetch, isFetching } = useDatablogs(searchQuery)

    return (
        <Fragment>
            {
                isError && (
                    <Fragment>
                        <Text>Something Went Wrong. Please Try Again.</Text>
                    </Fragment>
                )
            }

            <Fragment>
                <Navigation width={width} />

                <Herolabs />

                <ChatbotButton />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 1.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <Heading textAlign={'center'} size={width > 768 ? 'xl' : 'md'} marginTop={width > 768 ? '100px' : '30px'} marginBottom={'30px'} color={primaryFontColor}>What Are You Looking For?</Heading>
                    <Flex
                        width={'100%'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        mt={4} // Optional: to add some top margin
                    >
                        <Flex
                            width={width >= 1280 ? '50%' : '80%'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Input
                                isDisabled={isFetching}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                value={searchQuery}
                                placeholder='Search Content Labs...'
                                color={primaryFontColor}
                                borderTopLeftRadius={'2xl'}
                                borderBottomLeftRadius={'2xl'}
                                borderTopRightRadius={'0'}
                                borderBottomRightRadius={'0'}
                                size={width > 768 ? 'lg' : 'md'}
                                borderWidth={3}
                                colorScheme='purple'
                                borderColor={"#536189"}
                                focusBorderColor={ternaryColor}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        refetch();
                                    }
                                }}
                            />
                            <Button
                                isLoading={isFetching}
                                borderTopLeftRadius={'0'}
                                borderBottomLeftRadius={'0'}
                                size={width > 768 ? 'lg' : 'md'}
                                onClick={() => refetch()}
                                fontWeight={'bold'}
                                colorScheme='purple'
                                color={'black'}
                            >
                                Search
                            </Button>
                        </Flex>
                    </Flex>

                </motion.div>
                {
                    isFetching ? <Loading />
                        :
                        <Content blog={blogs} itemsPerPage={9} width={width} />
                }
                <Box mt={200}>
                    <Footer />
                </Box>
            </Fragment>
        </Fragment >
    )
}

export default Labs