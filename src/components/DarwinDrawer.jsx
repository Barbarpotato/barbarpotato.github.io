import React, { useEffect, useState } from 'react';
import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader,
    DrawerOverlay, DrawerContent, DrawerCloseButton,
    Button, Input, Text, Box, Flex, Heading
} from '@chakra-ui/react';

// Fetch function
const fetchData = async (message = "", history = []) => {
    try {
        const filteredHistory = history.map((item) => ({
            ...item,
            message: undefined
        }));

        const response = await fetch("https://darwin-assistant.vercel.app/api/v1/conversation/portfolio", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ history: filteredHistory, message })
        });

        const data = await response.json();
        return data;
    } catch (err) {
        return { status: "failed", response: "Oops😟! Darwin is currently busy, please try again later." };
    }
};

function DarwinDrawer({ isOpen, onClose, btnRef }) {
    const [message, setMessage] = useState("");
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        setHistory([
            { role: "user", parts: [{ text: "" }], message: "" },
            { role: "model", parts: [{ text: "Hello I am Darwin, Darmawan's Virtual Assistant. How can I help You?" }], message: "Hello I am Darwin, Darmawan's Virtual Assistant. How can I help You?" }
        ]);
        setMessage("");
    }, []);

    const handleSendMessage = async () => {
        if (!message.trim() || loading) return;

        setLoading(true); // Disable input while waiting for response

        setHistory((prev) => [
            ...prev,
            { role: "user", parts: [{ text: message }], message },
            { role: "model", parts: [{ text: "Thinking..." }], message: "Typing..." }
        ]);

        setMessage("");

        const data = await fetchData(message, history);

        setHistory((prev) => {
            const newHistory = [...prev];
            newHistory[newHistory.length - 1] = { role: "model", parts: [{ text: data.response }], message: data.response };
            return newHistory;
        });

        setLoading(false); // Enable input after response
    };

    return (
        <Drawer blockScrollOnMount={false} size={"lg"} isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <Heading color={"#ff79c6"} size={"md"}>Conversation With Darwin</Heading>
                </DrawerHeader>
                <DrawerBody>
                    {history.map((message, index) => (
                        message.message ? (
                            <Flex
                                key={index}
                                direction="column"
                                align={message.role === "model" ? "flex-start" : "flex-end"} // Align left for model, right for user
                            >
                                <Box
                                    mb={4}
                                    p={3}
                                    borderRadius="md"
                                    bg={message.role === "model" ? "#2D3748" : "#4A5568"}
                                    color="white"
                                    width="85%"
                                    transition="all 0.2s ease-in-out"
                                    _hover={{
                                        bg: message.role === "model" ? "#394150" : "#5A6478", // Slightly lighter on hover
                                        transform: "scale(1.02)", // Slight zoom effect
                                        boxShadow: "md", // Adds a subtle shadow
                                    }}
                                >
                                    <Text fontWeight="bold" color="#ff79c6">
                                        {message.role === "model" ? "Darwin" : "You"}
                                    </Text>
                                    <Text mt={1}>{message.message}</Text>
                                </Box>
                            </Flex>
                        ) : null
                    ))}
                </DrawerBody>
                <DrawerFooter>
                    <Flex width="100%">
                        <Input
                            value={message}
                            onKeyDown={(e) => { if (e.key === 'Enter' && !loading) handleSendMessage(); }}
                            onChange={(e) => setMessage(e.target.value)}
                            borderLeftRadius='2xl' borderRightRadius={0} borderWidth={3} borderColor="#536189" focusBorderColor="#ff79c6"
                            my={2} placeholder='Send a message...'
                            isDisabled={loading} // Disable input when Darwin is typing
                        />
                    </Flex>
                    <Button
                        borderLeftRadius={0}
                        colorScheme='purple'
                        my={2}
                        onClick={handleSendMessage}
                        isDisabled={loading} // Disable button when Darwin is typing
                        isLoading={loading} // Show loading indicator
                        loadingText="Sending..."
                    >
                        Send
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default DarwinDrawer;
