import React, { useState } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const [darwinMessage, setDarwinMessage] = useState([
        {
            role: "system",
            content:
                "You are a helpful assistant named Darwin. Darmawan created you to assist with personal questions about him. " +
                "Your primary role is to provide accurate and helpful responses based on the information you have about Darmawan. " +
                "Darmawan is a Software Engineer who works at PT. Samamaju Prima to build and maintain software." +
                "Darmawan is always eager to expand knowledge and keep up with the latest trends in software development. " +
                "Darmawan is a good team player and always willing to help others. " +
                "He is a good communicator and always willing to listen to others. " +
                "He willing to learn others. not just programming" +
                "Sometimes he create a blog in this website. he name it labs. because all the blog he post is about experiment and his learning." +
                "Make sure to maintain a friendly and professional tone in your responses and offer help based on the details provided." +
                "Make sure only responses that are relevant questions are provided."
        }
    ]);

    const handleComplexQuestions = async (message) => {
        try {

            if (!message) return;

            const newMessages = [...darwinMessage, { role: "user", content: message }];
            setDarwinMessage(newMessages);

            const url = "https://api.arliai.com/v1/chat/completions";
            const Darwin_API_KEY = import.meta.env.VITE_DARWIN_AI;

            const payload = {
                model: "Meta-Llama-3.1-8B-Instruct",
                messages: newMessages,
                repetition_penalty: 1.1,
                temperature: 0.7,
                top_p: 0.9,
                top_k: 40,
                max_tokens: 600,
                stream: true
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Darwin_API_KEY}`
                },
                body: JSON.stringify(payload)
            });

            // handle properly if response is not ok
            if (!response.ok) {
                handleHello();
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let completeContent = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split('\n').filter(Boolean);
                for (const line of lines) {
                    const lineContent = line.trim();
                    if (lineContent.startsWith('data:')) {
                        const jsonData = lineContent.slice(5).trim();
                        if (jsonData !== '[DONE]') {
                            try {
                                const parsed = JSON.parse(jsonData);
                                if (parsed.choices && parsed.choices[0].delta.content) {
                                    completeContent += parsed.choices[0].delta.content;
                                }
                            } catch (error) {
                                handleHello();
                            }
                        }
                    }
                }
            }

            const botMessage = createChatBotMessage(completeContent, { withAvatar: false, widget: 'stopPlaying' });

            // appending the history converstation with user
            setDarwinMessage([...darwinMessage, { role: 'assistant', content: completeContent }]);

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
            "oh, Hello!😁 Hopefully you have a wonderful day! I hope you've enjoyed browsing my website. Can I help you with anything else?",
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