import {
    Avatar, Box, Button, Center, Flex, Grid,
    Heading, Spacer, Text
} from '@chakra-ui/react';
import React, { Fragment, useEffect, useState } from 'react'
import Loading from '../../components/Loading';
import { useResponsive } from '../hooks/useResponsive';

function Badges() {

    const { isMobile } = useResponsive();

    const [data, setData] = useState([]); // Store fetched data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1); // Current page
    const itemsPerPage = isMobile ? 4 : 6; // Number of items per page

    // Fetch data from a public API
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "/data/badges.json"
                ); // Replace with your public data URL
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Handle pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const lastPage = Math.ceil(data.length / itemsPerPage);

    // Change pages
    const handlePaginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        // ** pointing to the badges element
        const badgesElement = document.getElementById('Badges');
        if (badgesElement) {
            badgesElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Handle credential url reference link
    const handleCredentialUrl = (url) => {
        window.open(url, "_blank");
    }

    // Error handling and loading states
    if (loading) return <Loading />
    if (error) return <p>Something went wrong</p>;

    return (
        <Fragment>
            <Heading
                mt={"10vh"}
                id="Badges"
                textAlign="center"
                opacity={0.8}
                mb={10}
                color="#faf9ff"
            >
                <span style={{ color: "#bd93f9" }}>{"<"}</span>
                Badges
                <span style={{ color: "#bd93f9" }}>{' />'}</span>
            </Heading>

            <Flex direction={{ base: 'column', xl: 'row' }} paddingInline={{ base: "2rem", xl: "15%" }} justifyContent={{ xl: "center" }} >
                {isMobile ? (
                    <Fragment>
                        {currentItems?.map((item, index) => (
                            <Box
                                borderColor={`rgba(134, 107, 171, 0.4)`}
                                borderStyle={"solid"}
                                cursor={"pointer"}
                                _hover={{
                                    borderColor: "rgba(134, 107, 171, 1)",
                                }}
                                onClick={() => handleCredentialUrl(item.credential_url)}
                                borderWidth={"1px"}
                                m={2} p={8}
                                key={index}
                            >
                                <Text opacity={0.7} mb={8}>
                                    {item.description}
                                </Text>
                                <Flex>
                                    <Box>
                                        <Text>
                                            {item.title}
                                        </Text>
                                        <Text>
                                            {item.company_name}
                                        </Text>
                                        <Text opacity={0.5}>
                                            {item.date}
                                        </Text>
                                    </Box>
                                    <Spacer />
                                    <Avatar name={item.title} src={item.logo_url} />
                                </Flex>
                            </Box>
                        ))}
                    </Fragment>
                ) : (
                    <Grid templateColumns='repeat(2, 1fr)'>
                        {currentItems?.map((item, index) => (
                            <Box

                                borderColor={`rgba(134, 107, 171, 0.4)`}
                                borderStyle={"solid"}
                                cursor={"pointer"}
                                _hover={{
                                    borderColor: "rgba(134, 107, 171, 1)",
                                }}
                                onClick={() => handleCredentialUrl(item.credential_url)}
                                borderWidth={"1px"}
                                m={2} p={8}
                                key={index}
                            >
                                <Text opacity={0.7} mb={8}>
                                    {item.description}
                                </Text>
                                <Flex>
                                    <Box>
                                        <Text>
                                            {item.title}
                                        </Text>
                                        <Text opacity={0.5}>
                                            {item.company_name}
                                        </Text>
                                        <Text opacity={0.5}>
                                            {item.date}
                                        </Text>
                                    </Box>
                                    <Spacer />
                                    <Avatar name={item.title} src={item.logo_url} />
                                </Flex>
                            </Box>
                        ))}
                    </Grid>
                )}
            </Flex>

            <Center marginTop={5}>
                {
                    currentPage != 1 && (
                        <Button
                            size={'md'}
                            variant={'ghost'}
                            colorScheme='purple'
                            onClick={() => {
                                handlePaginate(currentPage - 1);
                            }}
                        >
                            Previous
                        </Button>
                    )
                }

                {
                    currentPage != lastPage && (
                        <Button
                            size={'md'}
                            variant={'ghost'}
                            colorScheme='purple'
                            onClick={() => {
                                handlePaginate(currentPage + 1);
                            }}
                        >
                            Next
                        </Button>
                    )
                }
            </Center>
        </Fragment>
    );
}

export default Badges;