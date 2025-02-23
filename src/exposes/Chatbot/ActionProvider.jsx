import React, { useState } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const [darwinMessage, setDarwinMessage] = useState([]);

    const handleComplexQuestions = async (message) => {
        try {
            if (!message) return;

            const url = "https://darwin-assistant.vercel.app/api/v1/conversation/portfolio";

            const payload = {
                history: darwinMessage,
                message: message
            };

            // Show loading message
            const loadingMessage = createChatBotMessage("Typing...", { withAvatar: false });
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, loadingMessage],
            }));

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Failed to fetch response");
            }

            let darwinResp = await response.json();
            darwinResp = darwinResp.response;

            const botMessage = createChatBotMessage(darwinResp, { withAvatar: false, widget: 'stopPlaying' });

            // Append the conversation history
            setDarwinMessage([...darwinMessage,
            { role: 'user', parts: [{ text: message }] },
            { role: 'model', parts: [{ text: darwinResp }] }
            ]);

            // Update messages: remove loading and add response
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages.slice(0, -1), botMessage], // Remove last (loading) message
            }));

        } catch (error) {
            console.error("Error fetching response:", error);

            // Replace loading message with an error message
            const errorMessage = createChatBotMessage("Sorry, I'm having trouble responding. Please try again.", { withAvatar: false });
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages.slice(0, -1), errorMessage], // Remove last (loading) message
            }));
        }
    };


    const handleHello = () => {

        const botMessage = createChatBotMessage(
            "Oh, hello! 😁 Darwin might be busy. For further questions, please contact Darmawan directly using the provided information. Thank you!",
            { withAvatar: false, widget: 'initialMessage' }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    }


    const handlePersonalInformation = () => {

        const botMessage = createChatBotMessage(
            "Well, He currently working as a Software Engineer in PT Samamaju Prima. He responsible with Design, Build and Maintain software",
            { withAvatar: false, widget: 'initialMessage' }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    }


    const handleHiringReaction = () => {

        const botMessage = createChatBotMessage(
            "Wow! 😱 Thank you for the opportunity. To send him a message and have a further discussion, I will redirect you to his LinkedIn",
            { withAvatar: false, widget: 'initialMessage' }
        );

        setTimeout(() => {
            window.open('https://www.linkedin.com/in/darmawan-jr-b16135220/', '_blank', 'noopener,noreferrer');
        }, 4000);

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handlePersonalInformation,
                        handleHiringReaction,
                        handleComplexQuestions,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;