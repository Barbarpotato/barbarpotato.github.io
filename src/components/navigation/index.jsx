import { Flex, Heading, Spacer } from '@chakra-ui/react'
import { primaryFontColor, secondaryColor } from '../../theme/globalTheme'
import React, { Fragment } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navigation({ width }) {

    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Flex id='navigation' p={width > 768 ? 10 : 2} alignItems='center' gap='2'>
            <Flex p='2'>
                <Heading onClick={() => navigate('/')} cursor={'pointer'} id='navigation' fontSize={'2xl'} color={primaryFontColor} size='md'><span style={{ color: secondaryColor, fontWeight: 'bold' }}>🚀D</span>armawan</Heading>
            </Flex>
            <Spacer />
            <Flex>
                {width > 768 && location.pathname === '' && (
                    <Fragment>
                        <Heading className='navbar' id="navigation" mx={6} fontWeight={'small'} color={primaryFontColor} size='md'><a href='#myproject'>Projects</a></Heading>
                        <Heading className='navbar' mx={6} fontWeight={'small'} color={primaryFontColor} size='md'>
                            <a href="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=444c23eb-f434-4e8e-9f81-953134657a98"
                                download="Darmawan CV" target='_blank'>
                                Resume
                            </a>
                        </Heading>
                        <Heading className='navbar' mx={6} fontWeight={'small'} color={primaryFontColor} size='md'><a href='#contact'>Contact</a></Heading>
                    </Fragment>
                )}

                {location.pathname === '/labs' && (
                    <Fragment>
                        <Link to={'/'}>
                            <Heading className='navbar' id="navigation" mx={6} fontWeight={'small'} color={primaryFontColor} style={{ fontSize: width > 768 ? '24px' : '14px' }}><a href='#myproject'>Home</a></Heading>
                        </Link>
                    </Fragment>
                )}

                {location.pathname.includes('/lab/') && (
                    <Fragment>
                        <Link to={'/labs'}>
                            <Heading className='navbar' id="navigation" mx={6} fontWeight={'small'} color={primaryFontColor} style={{ fontSize: width > 768 ? '24px' : '14px' }}><a href='#myproject'>Labs</a></Heading>
                        </Link>
                    </Fragment>
                )}

            </Flex>
        </Flex >
    )
}

export default Navigation