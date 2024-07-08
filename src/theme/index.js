// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { modalTheme } from './modal/modal'

// 2. Add your color mode config
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
    config,
    components: { Modal: modalTheme }
})

export default theme