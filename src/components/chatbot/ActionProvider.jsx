import { dictionaryAPI } from '../../api/chatbot';
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {

        sessionStorage.setItem("isPlaying", "false");

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

        sessionStorage.setItem("isPlaying", "false");

        const botMessage = createChatBotMessage(
            "Well, He currently working as a Software Engineer in PT Samamaju Prima. He responsible with Design, Build and Maintain software for internal company used. Using internal company Model View Controller (MVC) framework engine call ingrid, for build new software and maintain currently used software.",
            { withAvatar: false, delay: 1000, widget: 'initialMessage' }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    }


    const handleHiringReaction = () => {

        sessionStorage.setItem("isPlaying", "false");

        const botMessage = createChatBotMessage(
            "Wow! 😱 Thank you for the opportunity. To send him a message and have a further discussion, I will redirect you to his LinkedIn",
            { withAvatar: false, delay: 200, widget: 'initialMessage' }
        );

        setTimeout(() => {
            window.open('https://www.linkedin.com/in/darmawan-jr-b16135220/', '_blank', 'noopener,noreferrer');
        }, 4000);

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    }

    const handleInitiateDictionary = () => {

        sessionStorage.setItem("isPlaying", "true");

        const botMessage = createChatBotMessage(
            "Great!!!🥰 Let's Play Dictionary game. You will ask me anything about the english word. and i will give you an answer about that word. Ready for your word!!!🤔",
            { withAvatar: false }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    }

    const handleDictionaryApi = async (searchQuery) => {
        try {

            const response = await dictionaryAPI(searchQuery);

            let messages = ""
            const partOfSpeech = []

            if (response.length > 0) {
                if (response[0].meanings.length > 0) {
                    sessionStorage.setItem("meaningDictionaries", JSON.stringify(response[0].meanings))
                    messages = "Here are the list of meaning according to my knowledge base:"
                    for (let i = 0; i < response[0].meanings.length; i++) {
                        partOfSpeech.push(response[0].meanings[i].partOfSpeech)
                    }
                }
            } else {
                messages = "Sorry, I can't find any meaning for that word. Please give me another word."
            }
            sessionStorage.setItem("userQuery", searchQuery)
            sessionStorage.setItem("partOfSpeech", JSON.stringify(partOfSpeech))

            const botMessage = createChatBotMessage(messages,
                { withAvatar: false, widget: 'partsOfSpeech' }
            );

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }))

        } catch (error) {
            let messages = "Sorry, I can't find any meaning for that word. Please give me another word."

            const botMessage = createChatBotMessage(messages, { withAvatar: false, widget: 'stopPlaying' });

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }))
        }
    }

    const handleSpeechOptions = (value) => {

        const dictionaries = JSON.parse(sessionStorage.getItem("meaningDictionaries"))

        let meaning = dictionaries.filter((dictionary) => dictionary.partOfSpeech === value)

        if (meaning.length > 0) meaning = meaning[0]

        const definition = meaning.definitions[Math.floor(Math.random() * meaning.definitions.length)]

        if (definition) {
            const botMessage = createChatBotMessage(
                `"${sessionStorage.getItem("userQuery")}" is ${definition.definition}. \n ${definition.example ? `For example: ${definition.example}` : ''} `,
                {
                    withAvatar: false,
                    widget: "stopPlaying"
                });
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }))
        }

    }

    const handleStopPlaying = () => {

        sessionStorage.setItem("isPlaying", "false");

        const botMessage = createChatBotMessage(
            "Okey Cool It was fun! Thanks for playing with me 🥰. Can I help you with anything else?",
            { withAvatar: false, widget: 'initialMessage' }
        );

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
                        handleInitiateDictionary,
                        handleDictionaryApi,
                        handleSpeechOptions,
                        handleStopPlaying
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;