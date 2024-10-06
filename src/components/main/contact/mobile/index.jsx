import { Heading, Flex, Box, Input, Textarea, Button, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
import { primaryColor, primaryFontColor, ternaryColor, secondaryColor } from '../../../../theme/globalTheme'

function Contact({ handleSendMessage, isLoading,
    contactMessage, setContactMessage, respMessage }) {
    return (
        <Fragment>
            <Heading id='contact' pt={20} pb={10} textAlign={'center'} opacity={0.8} color={primaryFontColor}><span style={{ color: secondaryColor }}>{"<"}
            </span>Contact Me<span style={{ color: secondaryColor }}>{' />'}</span>
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
        </Fragment >
    )
}

export default Contact
