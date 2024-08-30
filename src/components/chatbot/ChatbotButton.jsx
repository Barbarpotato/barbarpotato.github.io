import { MdSupportAgent } from "react-icons/md";
import config from "./config";
import Loading from '../loading/index'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import { memo, Fragment, useState, lazy, Suspense } from 'react'

const Chatbot = lazy(() => import('react-chatbot-kit'));

function ChatbotButton() {
    const [activeChatBot, setActiveChatBot] = useState(false)

    return (
        <Fragment>
            {activeChatBot && (
                <Suspense fallback={<Loading />}>
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
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