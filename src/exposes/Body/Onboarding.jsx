import { ReactFlow, Background, addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import { Container, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box } from "@chakra-ui/react";

import MainNode from '../../components/MainNode';
import SubNode from '../../components/SubNode';

const nodeTypes = { MainNode: MainNode, SubNode: SubNode };

import '@xyflow/react/dist/style.css';

export default function OnBoarding() {
    const isMobile = useBreakpointValue({ base: true, xl: false });

    const [nodes, setNodes] = useState([]);
    const [_selectedNodeId, setSelectedNodeId] = useState(null);
    const [edges, setEdges] = useState([]);
    const [mainNodeTrigger, setMainNodeTrigger] = useState(0); // Trigger for typewriter effect

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

    const onConnect = useCallback(
        (connection) => {
            setEdges((eds) =>
                addEdge(
                    {
                        ...connection,
                        style: { stroke: '#FF0072', strokeWidth: 2 }
                    },
                    eds
                )
            );
        },
        []
    );

    const onNodeClick = useCallback((event, node) => {
        if (node.type === 'SubNode') {
            setSelectedNodeId(node.id);
            const updatedNodes = nodes.map((n) => {
                if (n.id === 'related') {
                    return {
                        ...n,
                        data: {
                            ...n.data,
                            label: node.data.label,
                            description: node.data.description,
                            url: node.data.url,
                            trigger: mainNodeTrigger + 1 // Update trigger
                        }
                    };
                }
                return {
                    ...n,
                    style: n.type === 'MainNode' ? {} : {
                        background: '#866bab',
                        color: '#fff',
                        border: n.id === node.id ? '2px solid #ff79c6' : '1px solid #777',
                        borderRadius: '10px',
                        padding: '10px',
                        boxShadow: n.id === node.id
                            ? '0 0 15px #ff79c6, 0 4px 8px rgba(0, 0, 0, 0.1)'
                            : '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }
                };
            });
            setNodes(updatedNodes);
            setMainNodeTrigger((prev) => prev + 1); // Increment trigger to restart typewriter
        }
    }, [nodes, mainNodeTrigger]);

    useEffect(() => {
        const initialNodes = [
            {
                id: 'about',
                type: 'SubNode',
                data: {
                    label: 'About',
                    main: true,
                    url: 'https://barbarpotato.github.io/About/',
                    description: "Describing myself as a software engineer with a strong focus on software development and architecture."
                },
                position: { x: -100, y: 120 },
                sourcePosition: 'right'
            },
            {
                id: 'labs',
                type: 'SubNode',
                data: {
                    label: 'Labs',
                    main: true,
                    url: 'https://barbarpotato.github.io/Labs/',
                    description: "Technical articles, tutorials, and insights about web development and software engineering."
                },
                position: { x: 0, y: 200 },
                sourcePosition: 'right'
            },
            {
                id: 'projects',
                type: 'SubNode',
                data: {
                    label: 'Projects',
                    main: true,
                    url: 'https://barbarpotato.github.io/Projects/',
                    description: "A mix of things I’ve built—some for fun, some for work, all focused on making ideas come to life with clean and solid code."
                },
                position: { x: -120, y: 280 },
                sourcePosition: 'right'
            },
            {
                id: 'badge',
                type: 'SubNode',
                data: {
                    label: 'Badges',
                    main: true,
                    url: 'https://barbarpotato.github.io/Badges/',
                    description: "These badges represent the certificates I’ve earned through my journey of learning across a variety of online platforms."
                },
                position: { x: 0, y: 370 },
                sourcePosition: 'right'
            },
            {
                id: 'experiences',
                type: 'SubNode',
                data: {
                    label: 'Experiences',
                    main: true,
                    url: 'https://barbarpotato.github.io/Experiences/',
                    description: "Explore some of my past experiences, where I’ve consistently tracked and evaluated my progress."
                },
                position: { x: -120, y: 470 },
                sourcePosition: 'right'
            },
            {
                id: 'related',
                type: 'MainNode',
                data: {
                    label: 'Hello Visitors👋',
                    description: 'These Section Allows You to Understand the sitemap of my Portfolio',
                    url: "https://barbarpotato.github.io/",
                    trigger: 0
                },
                position: { x: 270, y: 220 },
                targetPosition: 'left'
            }
        ].map(node => ({
            ...node,
            style: node.type === 'MainNode' ? {} : {
                background: '#866bab',
                color: '#fff',
                border: '1px solid #777',
                borderRadius: '10px',
                padding: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }
        }));

        const initialEdges = [
            { id: 'e2', source: 'labs', target: 'related', animated: true },
            { id: 'e4', source: 'projects', target: 'related', animated: true },
            { id: 'e5', source: 'badge', target: 'related', animated: true },
            { id: 'e6', source: 'about', target: 'related', animated: true },
            { id: 'e8', source: 'experiences', target: 'related', animated: true },
        ].map(edge => ({
            ...edge,
            style: { stroke: '#ff79c6', strokeWidth: 2 }
        }));

        setNodes(initialNodes);
        setEdges(initialEdges);
    }, []);

    return (
        <Container maxW="7xl" color="#faf9ff" pt={20}>
            <Box className='stars3'></Box>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <Flex direction={"column"} justify="space-between" mb={8}>
                    <Box>
                        <Heading
                            size={{ base: '2xl', sm: '3xl', md: 'xl' }}
                            mb={2}
                        >
                            Dive Into The Contents Of My Creation
                        </Heading>
                        <Text
                            color="#c0c0c0"
                            fontSize={{ base: 'lg', sm: 'xl', md: 'lg' }}
                        >
                            Explore a curated collection of my Profile, projects, technical insights, and in-depth development tutorials.
                        </Text>
                    </Box>

                    <Box borderWidth={2} borderColor={'#c0c0c0'} boxShadow={'0 4px 8px rgba(0, 0, 0, 0.1)'} borderRadius="2xl" w="100%" h="50vh" marginTop={10}>
                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                            <ReactFlow
                                nodes={nodes}
                                edges={edges}
                                onNodesChange={onNodesChange}
                                onEdgesChange={onEdgesChange}
                                onConnect={onConnect}
                                onNodeClick={onNodeClick}
                                deleteKeyCode={null}
                                fitView
                                zoomOnScroll={isMobile}
                                nodeTypes={nodeTypes}
                            >
                                <Background variant="lines" color='#c0c0c0' style={{ opacity: 0.2 }} />
                            </ReactFlow>
                        </div>
                    </Box>
                </Flex>
            </motion.div>
        </Container>
    );
}