import { Handle, Position } from '@xyflow/react';
import { Container, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box } from "@chakra-ui/react";
import {
    ReactFlow,
    Controls,
    Background,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges
} from '@xyflow/react';

import CustomNode from '../../components/CustomNode';

// we define the nodeTypes outside of the component to prevent re-renderings
const nodeTypes = { CustomNode: CustomNode };

// CSS
import '@xyflow/react/dist/style.css';

export default function OnBoarding() {

    const isMobile = useBreakpointValue({ base: true, xl: false });

    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

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

    // Handle node clicks
    const onNodeClick = useCallback((event, node) => {
        // Update the "related" node data based on the clicked node
        const updatedNodes = nodes.map((n) => {
            if (n.id === 'related') {
                // Update the label or any other part of the related node state
                return {
                    ...n,
                    data: { ...n.data, label: `${node.data.label}`, description: `${node.data.description}`, url: `${node.data.url}` }
                };
            }
            return n;
        });
        setNodes(updatedNodes);
    }, [nodes]);

    useEffect(() => {
        const nodes = [
            {
                id: 'about', data: {
                    label: 'About', main: true,
                    url: 'https://barbarpotato.github.io/About/',
                    "description": "Describing myself as a software engineer with a strong focus on software development and architecture."
                }, position: { x: -100, y: 120 }, sourcePosition: 'right'
            },
            {
                id: 'labs', data: {
                    label: 'Labs', main: true,
                    url: 'https://barbarpotato.github.io/Labs/',
                    "description": "Technical articles, tutorials, and insights about web development and software engineering."
                }, position: { x: 0, y: 200 }, sourcePosition: 'right'
            },
            {
                id: 'projects', data: {
                    label: 'Projects', main: true,
                    url: 'https://barbarpotato.github.io/Projects/',
                    "description": "A mix of things I’ve built—some for fun, some for work, all focused on making ideas come to life with clean and solid code."
                }, position: { x: -120, y: 280 }, sourcePosition: 'right'
            },
            {
                id: 'badge', data: {
                    label: 'Badges', main: true,
                    url: 'https://barbarpotato.github.io/Badges/',
                    "description": "These badges represent the certificates I’ve earned through my journey of learning across a variety of online platforms. Each one showcases the knowledge and skills I've gained along the way, marking milestones in my continuous growth."
                }, position: { x: 0, y: 370 }, sourcePosition: 'right'
            },
            {
                id: 'experiences', data: {
                    label: 'Experiences', main: true,
                    url: 'https://barbarpotato.github.io/Experiences/',
                    "description": "Explore some of my past experiences, where I’ve consistently tracked and evaluated my progress, ensuring continuous growth and improvement along the way."
                }, position: { x: -120, y: 470 }, sourcePosition: 'right'
            },
            {
                id: 'related',
                type: 'CustomNode',
                data: { label: 'Hello Visitors👋', description: 'These Section Allows You to Understand the sitemap of my Portfolio', url: "https://barbarpotato.github.io/" },
                position: { x: 270, y: 280 },
                targetPosition: 'left'
            }
        ].map(node => ({
            ...node,
            style: node.type === 'CustomNode' ? {} : {
                background: '#866bab',
                color: '#fff',
                border: '1px solid #777',
                borderRadius: '10px',  // Add border radius
                padding: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Add shadow
            }
        }));

        const edges = [
            { id: 'e2', source: 'labs', target: 'related', animated: true },
            { id: 'e4', source: 'projects', target: 'related', animated: true },
            { id: 'e5', source: 'badge', target: 'related', animated: true },
            { id: 'e6', source: 'about', target: 'related', animated: true },
            { id: 'e8', source: 'experiences', target: 'related', animated: true },
        ].map(edge => ({
            ...edge,
            style: { stroke: '#ff79c6', strokeWidth: 2 }
        }));

        setNodes(nodes);
        setEdges(edges);
    }, []);

    return (
        <Container maxW="7xl" bg="#292b37" color="#faf9ff" pt={20}>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
                transition={{ duration: 0.6 }} // Duration of animation
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
                            fontSize={{ base: 'lg', sm: 'xl', md: 'lg' }} // Adjusting text size based on screen size
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
                                onNodeClick={onNodeClick}  // Handle node click
                                deleteKeyCode={null}
                                fitView
                                zoomOnScroll={isMobile} // Disable zoom on scroll
                                nodeTypes={nodeTypes}
                            >
                                <Controls />
                                <Background variant='dots' />
                            </ReactFlow>
                        </div>
                    </Box>
                </Flex>
            </motion.div>

        </Container >
    );
}