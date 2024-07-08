import React, { Fragment } from 'react'
import { Button } from '@chakra-ui/react'

function InitialMessage({ actionProvider }) {

    const messages = [
        {
            "message": "Just want to say hello!",
            "action": () => actionProvider.handleHello()
        },
        {
            "message": "What is he up to these days?",
            "action": () => actionProvider.handlePersonalInformation()
        },
        {
            "message": "We'd like to hire you",
            "action": () => actionProvider.handleHiringReaction()
        },
        {
            "message": "I want to play a game with you!",
            "action": () => actionProvider.handleInitiateDictionary()
        },
    ]

    return (
        <Fragment>
            {
                messages.length > 0 ?
                    messages.map((message, index) => (
                        <Button size={'xs'} variant={'outline'} mx={2} my={2} colorScheme='purple' key={index}
                            onClick={message.action}>
                            {message.message}
                        </Button>
                    ))
                    : null
            }
        </Fragment>
    )
}

export default InitialMessage