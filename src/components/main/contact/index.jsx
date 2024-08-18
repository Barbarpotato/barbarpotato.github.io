import { Suspense, lazy, useState } from 'react'
import { sendContactMessage } from '../../../api/form';
import {
    useDisclosure, Modal, ModalOverlay, Text,
    ModalContent, ModalHeader, ModalBody, ModalFooter, Button
} from '@chakra-ui/react';
import Loading from '../../loading';

const ContactDesktop = lazy(() => import('./desktop/index'));
const ContactMobile = lazy(() => import('./mobile/index'));

function Contact({ width }) {

    const OverlaySendMessage = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    // ** Modal Utility
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, _setOverlay] = useState(<OverlaySendMessage />)

    // ** Contact Utility
    const [contactMessage, setContactMessage] = useState({ name: '', email: '', message: '' })
    const [respMessage, setRespMessage] = useState({ title: '', description: '' })
    const [isLoading, setIsLoading] = useState(false)

    const handleSendMessage = () => {
        setIsLoading(true)

        if (contactMessage.name === '' || contactMessage.email === '' || contactMessage.message === '') {
            onOpen()
            setRespMessage({ title: "Oops!", description: "Please Fill All The Input Fields." })
            setIsLoading(false)
            return
        }

        sendContactMessage(contactMessage)
            .then((data) => {
                onOpen()
                if (data.hasOwnProperty('message') && data.message == 'Successfully Send a Message') {
                    setRespMessage({ title: "Hooray!", description: "You Successfully Send a Message. We Will Get Back To You Soon." })
                } else setRespMessage({ title: "Oops!", description: "Something Went Wrong. Please Try Again Later." })
                setContactMessage({ name: '', email: '', message: '' })
                setIsLoading(false)
            }).catch(error => {
                onOpen()
                setRespMessage({ title: "Oops!", description: "Something Went Wrong. Please Try Again Later." })
                setIsLoading(false)
                console.error(error)
            })
    }

    return (
        <Suspense fallback={<Loading />}>
            <Modal closeOnOverlayClick={false} variant={'purple'} size={'lg'} colorScheme={'black'} isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader color={respMessage.title === 'Oops!' ? 'red' : 'white'}>{respMessage.title}</ModalHeader>
                    <ModalBody>
                        <Text fontSize={'md'} color={'white'}>{respMessage.description}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='purple' onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {width >= 768 ?
                <ContactDesktop width={width} handleSendMessage={handleSendMessage} isLoading={isLoading}
                    contactMessage={contactMessage} setContactMessage={setContactMessage}
                    respMessage={respMessage} />
                :
                <ContactMobile handleSendMessage={handleSendMessage} isLoading={isLoading}
                    contactMessage={contactMessage} setContactMessage={setContactMessage}
                    respMessage={respMessage} />
            }
        </Suspense>
    )
}

export default Contact