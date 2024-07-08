import { createChatBotMessage } from 'react-chatbot-kit';
import SpeechOptions from './dictionaryGame/SpeechOptions';
import InitialMessage from './InitialMessage';
import StopPlaying from './dictionaryGame/StopPlaying';

const config = {
    initialMessages: [
        createChatBotMessage(`Hello I am Darwin, Darmawan's Bot. I'm here to help you with any questions you might have about him.`, { withAvatar: false }),
        createChatBotMessage(`How can I help you?`, { withAvatar: false, widget: 'initialMessage', delay: 1000 })],

    botName: 'Darwin',
    widgets: [
        {
            widgetName: 'initialMessage',
            widgetFunc: (props) => <InitialMessage {...props} />
        },
        {
            widgetName: 'partsOfSpeech',
            widgetFunc: (props) => <SpeechOptions {...props} />
        },
        {
            widgetName: 'stopPlaying',
            widgetFunc: (props) => <StopPlaying {...props} />
        }

    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#bd93f9',
        },
        chatButton: {
            backgroundColor: '#bd93f9',
        },
    },
};

export default config;