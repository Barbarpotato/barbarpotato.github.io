import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody, Image, Flex, Heading, Text, Box, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import '../../../../styles/labs/paginate.css'
import ReactPaginate from 'react-paginate';
import { primaryColor, primaryFontColor, secondaryColor } from '../../../../theme/globalTheme'

function Items({ blog }) {

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
                {blog.map((item) => (
                    <Card marginInline={5} style={{ marginTop: '50px' }} borderRadius={'2xl'} height={'500px'} boxShadow={'dark-lg'}>
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
                                <Text>Published: {item.timestamp}</Text>
                                <Text textAlign={"justify"} color={primaryFontColor}>
                                    {item.short_description.length > 230
                                        ? `${item.short_description.slice(0, 200)}...` // Truncate the string
                                        : item.short_description}
                                </Text>
                                <Text onClick={() => navigate(`/lab/${item.blog_id}`)} mt={2} w={'auto'} color={secondaryColor} textDecoration={'underline'} fontSize={'md'}>Read More...</Text>
                            </Flex>
                        </CardBody>
                    </Card>
                ))}
            </motion.div>
        </Fragment >
    )
}


function LabContent({ pageCount, currentItems, handlePageClick }) {
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