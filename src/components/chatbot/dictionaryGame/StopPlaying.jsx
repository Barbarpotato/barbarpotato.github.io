import { Button } from '@chakra-ui/react'
import React from 'react'

function StopPlaying({ actionProvider }) {
    return (
        <Button size={'xs'} variant={'solid'} mx={2} my={2} colorScheme='red'
            onClick={() => actionProvider.handleStopPlaying()}>
            I want to stop playing.
        </Button>
    )
}

export default StopPlaying