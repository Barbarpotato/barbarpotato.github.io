import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody, Image, Flex, Heading, Text, Grid, Box, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import '../../../../styles/labs/paginate.css'
import ReactPaginate from 'react-paginate';
import { primaryColor, primaryFontColor } from '../../../../theme/globalTheme'

function Items({ blog, width }) {

    const navigate = useNavigate()

    return (
        <Fragment>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <Grid marginTop={"60px"} marginInline={width > 768 ? '12%' : '20px'} templateColumns={width < 1280 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'} gap={6} >
                    {blog?.map((item) => (
                        <Card key={item.id} borderRadius={'2xl'} mb={20} height={width < 1280 ? '650px' : '500px'} boxShadow={'dark-lg'}>
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
                                    <Text>Published: {item.timestamp}</Text>
                                    <Text textAlign={"justify"} color={primaryFontColor}>
                                        {item.short_description.length > 230
                                            ? `${item.short_description.slice(0, 200)}...` // Truncate the string
                                            : item.short_description}
                                    </Text>
                                    <Button onClick={() => navigate(`/lab/${item.blog_id}`)} mt={5} w={'100px'} colorScheme='purple' color={primaryFontColor} rounded={'2xl'} fontSize={'xs'}>Read More...</Button>
                                </Flex>
                            </CardBody>
                        </Card>
                    ))}
                </Grid>
            </motion.div>
        </Fragment>
    )
}


function LabContent({ width, pageCount, currentItems, handlePageClick }) {
    return (
        <>
            <Items blog={currentItems} width={width} />
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