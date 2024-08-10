import {
    Heading, Flex, Box, Input, Textarea, Button, ModalOverlay, useDisclosure,
    Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Text
} from '@chakra-ui/react'
import { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import { primaryColor, primaryFontColor, ternaryColor } from '../../theme/globalTheme'
import { sendContactMessage } from '../../api/form'

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
        <Fragment>
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

            {width >= 768 && (
                <Fragment>
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}>
                        <Heading id='contact' pt={20} pb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                        </span>Contact Me<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                        </Heading>
                        <Flex mx={1} padding={5} justifyContent={'center'}>
                            <Flex mx={10} p={4} className='lighting-effect-pink' borderRadius={'2xl'} alignItems={'center'} backgroundColor={primaryColor}>
                                <iframe style={{ filter: 'invert(100%)' }}
                                    className="rounded-2xl shadow-xl mb-12" title="Address"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127166.45478409877!2d119.33258672746267!3d-5.111485701012477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee329d96c4671%3A0x3030bfbcaf770b0!2sMakassar%2C%20Makassar%20City%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1670937256226!5m2!1sen!2sid"
                                    width={width > 1020 ? '500px' : '400px'}
                                    height={width >= 1280 ? 500 : 300}
                                    loading="lazy"></iframe>
                                <Box>
                                    <Input onChange={(e) => setContactMessage({ ...contactMessage, name: e.target.value })} value={contactMessage.name} color={primaryFontColor}
                                        borderRadius={'2xl'} my={5} mx={10} w={'80%'} size={'lg'} borderWidth={3}
                                        placeholder='Name' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} />
                                    <Input onChange={(e) => setContactMessage({ ...contactMessage, email: e.target.value })} value={contactMessage.email} color={primaryFontColor}
                                        borderRadius={'2xl'} my={5} mx={10} w={'80%'} size={'lg'} borderWidth={3}
                                        placeholder='Email' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} />
                                    <Textarea onChange={(e) => setContactMessage({ ...contactMessage, message: e.target.value })} value={contactMessage.message}
                                        color={primaryFontColor} resize={'none'} borderRadius={'2xl'}
                                        my={5} mx={10} w={'80%'} size={'lg'} borderWidth={3} placeholder='Message'
                                        colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} ></Textarea>
                                    <Text color={'red'} fontSize={'sm'} mx={10}>{respMessage.description === 'Please Fill All The Input Fields.' ? '*Please Fill All The Input Fields.' : ''}</Text>
                                    <Button isLoading={isLoading} onClick={handleSendMessage} my={3} mx={10} fontWeight={'bold'} colorScheme='purple' color={'black'}>Send Message</Button>
                                </Box>
                            </Flex>
                        </Flex>
                    </motion.div>
                </Fragment>
            )}
            {
                width < 768 && (
                    <Fragment>
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}>
                            <Heading id='contact' pt={20} pb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{"<"}
                            </span>Contact Me<span style={{ color: 'rgba(134, 107, 171, 0.8)' }}>{'>'}</span>
                            </Heading>
                            <Flex mx={1} px={5} pb={20} justifyContent={'center'}>
                                <Box p={4} className='lighting-effect-pink' borderRadius={'2xl'} alignItems={'center'} backgroundColor={primaryColor}>
                                    <Box>
                                        <Input onChange={(e) => setContactMessage({ ...contactMessage, name: e.target.value })} value={contactMessage.name} color={primaryFontColor}
                                            borderRadius={'2xl'} my={5} mx={2} size={'lg'} borderWidth={3}
                                            width={'90%'} placeholder='Name' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} />
                                        <Input onChange={(e) => setContactMessage({ ...contactMessage, email: e.target.value })} value={contactMessage.email} color={primaryFontColor}
                                            borderRadius={'2xl'} my={5} mx={2} size={'lg'} borderWidth={3}
                                            width={'90%'} placeholder='Email' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} />
                                        <Textarea onChange={(e) => setContactMessage({ ...contactMessage, message: e.target.value })} value={contactMessage.message}
                                            color={primaryFontColor} resize={'none'} borderRadius={'2xl'} my={5} mx={2}
                                            width={'90%'} size={'lg'} borderWidth={3} placeholder='Message' colorScheme='purple' borderColor={"#536189"} focusBorderColor={ternaryColor} ></Textarea>
                                        <Text color={'red'} fontSize={'sm'} mx={2}>{respMessage.description === 'Please Fill All The Input Fields.' ? '*Please Fill All The Input Fields.' : ''}</Text>
                                        <Button isLoading={isLoading} onClick={handleSendMessage} my={3} mx={2} fontWeight={'bold'} colorScheme='purple' color={'black'}>Send Message</Button>
                                    </Box>
                                </Box>
                            </Flex>
                        </motion.div>
                    </Fragment>
                )
            }
        </Fragment >
    )
}

export default Contact
