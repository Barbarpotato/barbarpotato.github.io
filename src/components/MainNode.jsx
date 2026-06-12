import { Handle, Position } from '@xyflow/react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function MainNode({ data }) {
    const accent = data.color || '#cc7bc9';

    return (
        <MotionBox
            key={data.trigger || 0} // replay the reveal whenever the topic changes
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            w="340px"
            p="2px"
            borderRadius="20px"
            bgGradient="linear(135deg, #cc7bc9, #6c8cff, #50e3c2)"
            boxShadow={`0 0 34px ${accent}55`}
            position="relative"
        >
            <Box
                bg="#1f1b2e"
                borderRadius="18px"
                px={6}
                py={5}
                position="relative"
                overflow="hidden"
            >
                {/* soft glow blob for depth */}
                <Box
                    position="absolute"
                    top="-40px"
                    right="-40px"
                    w="120px"
                    h="120px"
                    borderRadius="full"
                    bg={accent}
                    opacity={0.18}
                    filter="blur(30px)"
                    pointerEvents="none"
                />

                <Text
                    fontFamily="'Outfit', sans-serif"
                    fontWeight="600"
                    fontSize="11px"
                    letterSpacing="0.18em"
                    textTransform="uppercase"
                    color={accent}
                    mb={2}
                >
                    Rangkuman Topik
                </Text>

                <Heading
                    fontFamily="'Playfair Display', serif"
                    fontWeight="800"
                    fontStyle="italic"
                    fontSize="2xl"
                    lineHeight="1.25"
                    color="#faf9ff"
                    mb={3}
                >
                    {data.label}
                </Heading>

                <Text
                    fontFamily="'Outfit', sans-serif"
                    color="#d0d0d0"
                    fontSize="sm"
                    lineHeight="1.7"
                >
                    {data.description}
                </Text>

                {data.url && (
                    <Link
                        href={data.url}
                        isExternal
                        fontFamily="'Outfit', sans-serif"
                        fontWeight="500"
                        fontSize="sm"
                        color={accent}
                        mt={3}
                        display="inline-block"
                        _hover={{ textDecoration: 'underline' }}
                    >
                        {data.url}
                    </Link>
                )}
            </Box>

            <Handle
                type="target"
                position={Position.Left}
                style={{ background: accent, border: '1px solid #000' }}
            />
        </MotionBox>
    );
}
