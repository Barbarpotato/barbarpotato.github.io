import React, { Fragment } from 'react'
import Navigation from '../../components/navigation'
import ChatbotButton from '../../components/chatbot/ChatbotButton'
import Hero from '../../components/main/hero'
import About from '../../components/main/about'
import Project from '../../components/main/project'
import Experience from '../../components/main/experience'
import Contact from '../../components/main/contact'
import Footer from '../../components/footer'
import 'react-chatbot-kit/build/main.css'

function Index() {
    return (
        <Fragment>
            <Navigation />
            <ChatbotButton />
            <Hero />
            <About />
            <Project />
            <Experience />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default Index