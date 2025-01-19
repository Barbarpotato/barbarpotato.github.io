import { Fragment, useState } from 'react'
import {
    useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalBody, ModalFooter, Button, Heading, Flex, Box, Input, Textarea, Text, Hide
} from '@chakra-ui/react'
import { sendContactMessage } from '../../api/Hecate/POST'

function Contact() {

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
                if (data.hasOwnProperty('message') && data.message == 'Successfully sent message!') {
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
        <Fragment>
            {/* Stars Animation */}
            <Box className='stars'></Box>
            <Box className='stars2'></Box>
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

            <Box mt={'10vh'}>
                <Heading id='contact' mb={10} textAlign={'center'} opacity={0.8} color={"#faf9ff"}><span style={{ color: "#bd93f9" }}>{"<"}
                </span>Contact Me<span style={{ color: "#bd93f9" }}>{' />'}</span>
                </Heading>
                <Flex mx={1} padding={5} justifyContent={'center'}>
                    <Flex mx={10} p={4} className='lighting-effect-pink' borderRadius={'2xl'} alignItems={'center'} backgroundColor={"#292b37"}>
                        <Hide below='lg'>
                            <iframe style={{ filter: 'invert(100%)' }}
                                className="rounded-2xl shadow-xl mb-12" title="Address"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127166.45478409877!2d119.33258672746267!3d-5.111485701012477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee329d96c4671%3A0x3030bfbcaf770b0!2sMakassar%2C%20Makassar%20City%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1670937256226!5m2!1sen!2sid"
                                width={window.innerWidth > 1020 ? '500px' : '400px'}
                                height={window.innerWidth >= 1280 ? 500 : 300}
                                loading="lazy"></iframe>
                        </Hide>
                        <Box>
                            <Input onChange={(e) => setContactMessage({ ...contactMessage, name: e.target.value })} value={contactMessage.name} color={"#faf9ff"}
                                borderRadius={'2xl'} my={5} mx={{ base: 0, lg: 10 }} w={{ base: '100%', lg: '80%' }} size={'lg'} borderWidth={3}
                                placeholder='Name' colorScheme='purple' borderColor={"#536189"} focusBorderColor={"#ff79c6"} />
                            <Input onChange={(e) => setContactMessage({ ...contactMessage, email: e.target.value })} value={contactMessage.email} color={"#faf9ff"}
                                borderRadius={'2xl'} my={5} mx={{ base: 0, lg: 10 }} w={{ base: '100%', lg: '80%' }} size={'lg'} borderWidth={3}
                                placeholder='Email' colorScheme='purple' borderColor={"#536189"} focusBorderColor={"#ff79c6"} />
                            <Textarea onChange={(e) => setContactMessage({ ...contactMessage, message: e.target.value })} value={contactMessage.message}
                                color={"#faf9ff"} resize={'none'} borderRadius={'2xl'}
                                my={5} mx={{ base: 0, lg: 10 }} w={{ base: '100%', lg: '80%' }} size={'lg'} borderWidth={3} placeholder='Message'
                                colorScheme='purple' borderColor={"#536189"} focusBorderColor={"#ff79c6"} ></Textarea>
                            <Text color={'red'} fontSize={'sm'} mx={10}>{respMessage.description === 'Please Fill All The Input Fields.' ? '*Please Fill All The Input Fields.' : ''}</Text>
                            <Button isLoading={isLoading} onClick={handleSendMessage} my={3} mx={{ base: 0, lg: 10 }} fontWeight={'bold'} colorScheme='purple' color={'black'}>Send Message</Button>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

        </Fragment>
    )
}

export default Contact