import { Heading, Flex, Box, Input, Textarea, Button, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { primaryColor, primaryFontColor, ternaryColor, secondaryColor } from '../../../../theme/globalTheme'

function Contact({ width, handleSendMessage, isLoading,
    contactMessage, setContactMessage, respMessage }) {

    return (
        <Fragment>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}>
                <Heading id='contact' pt={20} pb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: secondaryColor }}>{"<"}
                </span>Contact Me<span style={{ color: secondaryColor }}>{' />'}</span>
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
        </Fragment >
    )
}

export default Contact
