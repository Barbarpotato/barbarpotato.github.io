import { Handle, Position } from '@xyflow/react';
import { Box, Text, VStack, Link, useColorModeValue } from '@chakra-ui/react';

export default function CustomNode({ data }) {
    // Define code editor-like colors based on color mode
    const bgColor = useColorModeValue('#1A202C', '#2D3748');
    const keyColor = '#569CD6'; // Blue for JSON keys
    const stringColor = '#CE9178'; // Orange for JSON strings
    const punctuationColor = '#D4D4D4'; // White for braces and commas

    // Format data as a JSON-like string with colorized spans
    const jsonContent = (
        <Text fontSize="sm" whiteSpace="pre" color={punctuationColor}>
            {'{'}
            <br />

            <Text as="span" color={keyColor}>
                "label"
            </Text>
            :{' '}
            <Text as="span" color={stringColor} overflowWrap="break-word">
                "{data.label || 'node@related'}"
            </Text>
            ,
            <br />

            <Text as="span" color={keyColor}>
                "description"
            </Text>
            :{' '}
            <Text as="span" color={stringColor} overflowWrap="break-word">
                "{data.description || 'Custom Chakra UI Node'}"
            </Text>
            ,
            <br />

            <Text as="span" color={keyColor}>
                "url"
            </Text>
            :{' '}
            <Link
                href={data.url || '#'}
                color={stringColor}
                textDecoration="underline"
                _hover={{ textDecoration: 'underline', color: '#e9967a' }} // Slightly lighter orange on hover
                onClick={(e) => !data.url && e.preventDefault()} // Prevent clicking if no URL
            >
                "{data.url || 'no url provided'}"
            </Link>
            <br />
            {'}'}
        </Text>
    );

    return (
        <Box
            bg={bgColor}
            borderRadius="md"
            border="1px solid"
            borderColor="gray.600"
            boxShadow="0 0 10px rgba(86, 156, 214, 0.2)" // Subtle blue glow
            p={4}
            w="300px" // Fixed width
            fontFamily="'Fira Code', 'Consolas', monospace" // Monospaced font
            position="relative"
            transition="all 0.2s ease-in-out"
            _hover={{ boxShadow: '0 0 15px rgba(86, 156, 214, 0.3)' }} // Hover effect
        >
            {/* Code editor "header" bar */}
            <Box
                bg="gray.700"
                borderTopRadius="md"
                h="20px"
                mb={3}
                display="flex"
                alignItems="center"
                px={2}
            >
                {/* Window buttons (decorative) */}
                <Box w="10px" h="10px" borderRadius="full" bg="red.400" mr={1} />
                <Box w="10px" h="10px" borderRadius="full" bg="yellow.400" mr={1} />
                <Box w="10px" h="10px" borderRadius="full" bg="green.400" />
            </Box>

            {/* JSON content with scrollable area */}
            <Box
                maxH="200px" // Limit height to prevent overflow
                overflowY="auto" // Enable vertical scrolling
                pr={2} // Padding for scrollbar
                css={{
                    "cursor": "pointer !important",
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#292b37',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#866bab',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#cc7bc9',
                    },
                }}
            >
                <VStack align="start" spacing={1}>
                    {jsonContent}
                </VStack>
            </Box>

            {/* React Flow handle for connections */}
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: keyColor, border: '1px solid #000' }} // Blue to match JSON keys
            />
        </Box>
    );
}   