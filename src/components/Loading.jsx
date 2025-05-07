import React, { Fragment } from 'react'
import { Flex } from '@chakra-ui/react'

function Loading() {
    return (
        <Fragment>
            <Flex height={'100vh'} direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </Flex>
        </Fragment>
    )
}

export default Loading