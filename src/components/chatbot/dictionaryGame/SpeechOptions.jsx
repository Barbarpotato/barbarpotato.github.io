import { Button } from '@chakra-ui/react'
import React, { Fragment, useEffect, useState } from 'react'

function SpeechOptions({ actionProvider }) {

    const [partOfSpeech, setPartOfSpeech] = useState([])

    useEffect(() => {
        const partOfSpeech = JSON.parse(sessionStorage.getItem("partOfSpeech"))
        setPartOfSpeech(partOfSpeech)
    }, [])

    return (
        <Fragment>
            {partOfSpeech.length > 0 ? (
                partOfSpeech.map((value, index) => (
                    <Button size={'xs'} variant={'outline'} mx={2} my={2} colorScheme='purple'
                        onClick={() => actionProvider.handleSpeechOptions(value)}
                        key={index}
                    >
                        {value}
                    </Button>
                ))
            ) : (
                <p>No parts of speech available</p>
            )}
            <Button size={'xs'} variant={'solid'} mx={2} my={2} colorScheme='red'
                onClick={() => actionProvider.handleStopPlaying()}>
                I want to stop playing.
            </Button>
        </Fragment>

    )
}

export default SpeechOptions