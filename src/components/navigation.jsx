import { Flex, Heading, Spacer, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { primaryColor, primaryFontColor, secondaryColor } from '../theme/globalTheme'
import React, { Fragment } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navigation() {

    const { width } = useWindowSize()

    const location = useLocation()

    const navigate = useNavigate()

    return (
        <Flex p={width > 768 ? 10 : 2} alignItems='center' gap='2'>
            <Flex p='2'>
                <Heading onClick={() => navigate('/')} cursor={'pointer'} id='navigation' fontSize={'2xl'} color={primaryFontColor} size='md'><span style={{ color: secondaryColor, fontWeight: 'bold' }}>🚀D</span>armawan</Heading>
            </Flex>
            <Spacer />
            <Flex>
                {width <= 768 && location.pathname === '/' && (
                    <Menu isLazy>
                        <MenuButton color={primaryFontColor} fontWeight={'medium'}>Menu</MenuButton>
                        <MenuList backgroundColor={primaryColor}>
                            {/* MenuItems are not rendered unless Menu is open */}
                            <MenuItem backgroundColor={primaryColor} color={primaryFontColor}><a href='#myproject'>Projects</a></MenuItem>
                            <MenuItem backgroundColor={primaryColor} color={primaryFontColor}>
                                <a
                                    href="https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=444c23eb-f434-4e8e-9f81-953134657a98"
                                    download="Darmawan CV" target='_blank'>
                                    Resume
                                </a></MenuItem>
                            <MenuItem backgroundColor={primaryColor} color={primaryFontColor}><a href='#contact'>Contact</a></MenuItem>
                        </MenuList>
                    </Menu>
                )}
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
                            <Heading className='navbar' id="navigation" mx={6} fontWeight={'small'} color={primaryFontColor} size='md'><a href='#myproject'>Home</a></Heading>
                        </Link>
                    </Fragment>
                )}

            </Flex>
        </Flex >
    )
}

export default Navigation