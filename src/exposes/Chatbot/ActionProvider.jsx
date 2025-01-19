import React, { useState } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const [darwinMessage, setDarwinMessage] = useState([]);

    const handleComplexQuestions = async (message) => {
        try {

            if (!message) return;

            const url = "https://darwin-assistant.vercel.app/conversation";

            const payload = {
                history: darwinMessage,
                message: message
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            // handle properly if response is not ok
            if (!response.ok) {
                handleHello();
            }

            let darwinResp = await response.json();

            darwinResp = darwinResp.response;

            const botMessage = createChatBotMessage(darwinResp, { withAvatar: false, widget: 'stopPlaying' });

            // appending the history converstation with user
            setDarwinMessage([...darwinMessage, { role: 'user', parts: message }, { role: 'model', parts: darwinResp }]);

            // caching all the messages for react chatbot kit lib
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));

        } catch (error) {
            handleHello();
        }
    }


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