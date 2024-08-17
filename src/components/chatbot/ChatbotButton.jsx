import { MdSupportAgent } from "react-icons/md";
import Chatbot from 'react-chatbot-kit'
import config from "./config";
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import { Fragment, useState } from 'react'

function ChatbotButton() {
    const [activeChatBot, setActiveChatBot] = useState(false)

    return (
        <Fragment>
            {
                activeChatBot && <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            }
            <button
                onClick={() => setActiveChatBot(!activeChatBot)}
                className='chatbot-toggle-button'
                aria-label={activeChatBot ? 'Close chatbot' : 'Open chatbot'}
            >
                <MdSupportAgent size={30} color={'white'} />
            </button>
        </Fragment>
    )
}

export default ChatbotButton;
