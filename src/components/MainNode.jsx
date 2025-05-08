import { Handle, Position } from '@xyflow/react';
import { Box, Text, VStack, Link, useColorModeValue } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

export default function MainNode({ data }) {
    const bgColor = useColorModeValue('#1A202C', '#2D3748');
    const keyColor = '#569CD6'; // Blue for JSON keys
    const stringColor = '#CE9178'; // Orange for JSON strings
    const punctuationColor = '#D4D4D4'; // White for braces and commas

    const renderJsonContent = (typewriter) => {
        typewriter
            .typeString('<span style="color: #D4D4D4">{\n</span>')
            .typeString(
                `<span style="color: #569CD6">"label"</span><span style="color: #D4D4D4">: </span>` +
                `<span style="color: #CE9178">"${data.label || 'node@related'}"</span>` +
                `<span style="color: #D4D4D4">,\n</span>`
            )
            .typeString(
                `<span style="color: #569CD6">"description"</span><span style="color: #D4D4D4">: </span>` +
                `<span style="color: #CE9178">"${data.description || 'Custom Chakra UI Node'}"</span>` +
                `<span style="color: #D4D4D4">,\n</span>`
            )
            .typeString(
                `<span style="color: #569CD6">"url"</span><span style="color: #D4D4D4">: </span>` +
                `<a href="${data.url || '#'}" ` +
                `style="color: #CE9178; text-decoration: underline;" ` +
                `onmouseover="this.style.color='#e9967a'" ` +
                `onmouseout="this.style.color='#CE9178'">${data.url || 'no url provided'}</a>` +
                `<span style="color: #D4D4D4">\n}</span>`
            )
            .start();
    };

    return (
        <Box
            bg={bgColor}
            borderRadius="md"
            border="1px solid"
            borderColor="gray.600"
            boxShadow="0 0 10px rgba(86, 156, 214, 0.2)"
            p={4}
            w="300px"
            fontFamily="'Fira Code', 'Consolas', monospace"
            position="relative"
            transition="all 0.2s ease-in-out"
            boxSizing="border-box"
            _hover={{ boxShadow: '0 0 15px rgba(86, 156, 214, 0.3)' }}
        >
            <Box
                bg="gray.700"
                borderTopRadius="md"
                h="20px"
                mb={3}
                display="flex"
                alignItems="center"
                px={2}
            >
                <Box w="10px" h="10px" borderRadius="full" bg="red.400" mr={1} />
                <Box w="10px" h="10px" borderRadius="full" bg="yellow.400" mr={1} />
                <Box w="10px" h="10px" borderRadius="full" bg="green.400" />
            </Box>

            <Box
                maxH="300px"
                overflowY="auto"
                overflowX="hidden"
                pr={4}
                pl={2}
                maxW="100%"
                boxSizing="border-box"
                css={{
                    cursor: "pointer !important",
                    '&::-webkit-scrollbar': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#292b37',
                        borderRadius: '5px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#866bab',
                        borderRadius: '5px',
                        border: '2px solid #292b37',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#cc7bc9',
                    },
                }}
            >
                <VStack align="start" spacing={1} maxW="100%">
                    <Text
                        fontSize="sm"
                        whiteSpace="pre-wrap"
                        overflowWrap="break-word"
                        wordBreak="break-word"
                        maxW="100%"
                        color={punctuationColor}
                    >
                        <Typewriter
                            key={data.trigger || 0} // Use trigger to force re-render
                            onInit={renderJsonContent}
                            options={{
                                delay: 50,
                                cursor: '|',
                                autoStart: true,
                                loop: false,
                                wrapperClassName: 'typewriter-wrapper',
                                cursorClassName: 'typewriter-cursor',
                            }}
                        />
                    </Text>
                </VStack>
            </Box>

            <Handle
                type="target"
                position={Position.Left}
                style={{ background: keyColor, border: '1px solid #000' }}
            />
        </Box>
    );
}