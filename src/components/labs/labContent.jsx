import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody, Image, Flex, Heading, Text, Divider, Grid, Box, Button } from '@chakra-ui/react'
import useWindowSize from '../../hooks/useWindowSize'
import { useNavigate } from 'react-router-dom'
import '../../styles/labs/paginate.css'
import ReactPaginate from 'react-paginate';
import { primaryColor, primaryFontColor } from '../../theme/globalTheme'

function Items({ blog }) {

    const navigate = useNavigate()
    const { width } = useWindowSize()

    return (
        <Fragment>
            {width > 768 && (
                <Fragment>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <Grid style={{ marginTop: '60px', marginInline: width > 768 ? '100px' : '20px' }} templateColumns={width < 1280 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'} gap={6} >
                            {blog?.map((item) => (
                                <Card key={item.id} borderRadius={'2xl'} mb={20} height={width < 1280 ? '650px' : '500px'} boxShadow={'2xl'}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center">
                                        <Image
                                            h={'300px'}
                                            src={item.image}
                                            alt={item.image_alt}
                                            borderRadius='lg'
                                        />
                                    </Box>
                                    <CardBody backgroundColor={primaryColor}>
                                        <Flex height={'200px'} mt='6' direction='column'>
                                            <Heading color={primaryFontColor} size='md'>{item.title}</Heading>
                                            <Text color={primaryFontColor}>
                                                {item.short_description.length > 230
                                                    ? `${item.short_description.slice(0, 200)}...` // Truncate the string
                                                    : item.short_description}
                                            </Text>
                                            <Button onClick={() => navigate(`/darmajr94/lab/${item.blog_id}`)} mt={5} w={'100px'} colorScheme='purple' color={primaryFontColor} rounded={'2xl'} fontSize={'xs'}>Read More...</Button>
                                        </Flex>
                                    </CardBody>
                                    <Divider />
                                </Card>
                            ))}
                        </Grid>
                    </motion.div>
                </Fragment>
            )}
            {width <= 768 && (
                <Fragment>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        {blog.map((item) => (
                            <Card m={5} style={{ marginTop: '100px' }} borderRadius={'2xl'} height={'500px'} boxShadow={'2xl'}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Image
                                        h={'260px'}
                                        src={item.image}
                                        alt={item.image_alt}
                                        borderRadius='lg'
                                    />
                                </Box>
                                <CardBody backgroundColor={primaryColor}>
                                    <Flex height={'220px'} mt={2} direction='column'>
                                        <Heading color={primaryFontColor} size='md'>{item.title}</Heading>
                                        <Text color={primaryFontColor}>
                                            {item.short_description.length > 230
                                                ? `${item.short_description.slice(0, 200)}...` // Truncate the string
                                                : item.short_description}
                                        </Text>
                                        <Button onClick={() => navigate(`/darmajr94/lab/${item.blog_id}`)} mt={2} w={'100px'} colorScheme='purple' color={primaryFontColor} rounded={'xl'} fontSize={'xs'}>Read More...</Button>
                                    </Flex>
                                </CardBody>
                                <Divider />
                            </Card>
                        ))}
                    </motion.div>
                </Fragment>
            )}
        </Fragment >
    )
}


function LabContent({ blog, itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = blog?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blog?.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blog.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items blog={currentItems} />
            <ReactPaginate
                className='react-paginate'
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="Prev"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default LabContent