import { createChatBotMessage } from 'react-chatbot-kit';
import InitialMessage from './InitialMessage';

const config = {
    initialMessages: [
        createChatBotMessage(`Hello I am Darwin, Darmawan's Virtual Assistant. I'm here to help you with any questions you might have about him.`, { withAvatar: false }),
        createChatBotMessage(`How can I help you?`, { withAvatar: false, widget: 'initialMessage', delay: 1000 })],

    botName: 'Darwin',
    widgets: [
        {
            widgetName: 'initialMessage',
            widgetFunc: (props) => <InitialMessage {...props} />
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