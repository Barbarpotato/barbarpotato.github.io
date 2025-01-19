import { MdSupportAgent } from "react-icons/md";
import config from "./config";
import Loading from "../../components/Loading";
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import { memo, Fragment, useState, lazy, Suspense } from 'react'

import 'react-chatbot-kit/build/main.css'

const Chatbot = lazy(() => import('react-chatbot-kit'));

function ChatbotButton() {

    const [activeChatBot, setActiveChatBot] = useState(false)

    const validateInputMessage = (message) => {
        if (!message) {
            return false
        }
        return true
    }

    return (
        <Fragment>
            {activeChatBot && (
                <Suspense fallback={<Loading />}>
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        validator={validateInputMessage}
                    />
                </Suspense>
            )}
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

export default memo(ChatbotButton);