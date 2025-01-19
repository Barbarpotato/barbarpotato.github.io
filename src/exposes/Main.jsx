import { Fragment } from 'react'

import ChatbotButton from './Chatbot/ChatbotButton'
import Header from './Header'
import Hero from './Body/Hero'
import About from './Body/About'
import LabHome from './Body/Labs'
import Project from './Body/Project'
import Experience from './Body/Experience'
import Badges from './Body/Badge'
import Contact from './Body/Contact'
import Footer from './Footer'

function Portfolio() {

    return (
        <Fragment>
            <ChatbotButton />
            <Header />
            <Hero />
            <About />
            <LabHome />
            <Project />
            <Experience />
            <Badges />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default Portfolio