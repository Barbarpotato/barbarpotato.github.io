import React, { Fragment } from 'react'
import { useAboutme, useTypeWriter } from '../../api/hecate'
import Loading from '../../components/loading'
import Navigation from '../../components/navigation'
import ChatbotButton from '../../components/chatbot/ChatbotButton'
import Hero from '../../components/main/hero'
import About from '../../components/main/about'
import Project from '../../components/main/project'
import Experience from '../../components/main/experience'
import Contact from '../../components/main/contact'
import Footer from '../../components/footer'
import 'react-chatbot-kit/build/main.css'
import useWindowSize from '../../hooks/useWindowSize'

function Index() {

    // feteching all necessary data and pass it to the components
    const { data: typeWriter, isLoading: isLoadingTypeWriter } = useTypeWriter();
    const { data: aboutMe, isLoading: isLoadingAboutMe } = useAboutme();

    // make sure all data is loaded before rendering
    const isLoading = isLoadingTypeWriter || isLoadingAboutMe

    // centralizing the width hook state
    const { width } = useWindowSize()

    return (
        <Fragment>
            {isLoading ?
                <Loading />
                :
                <Fragment>
                    <Navigation width={width} />
                    <ChatbotButton />
                    <Hero typeWriter={typeWriter} width={width} />
                    <About aboutMe={aboutMe} width={width} />
                    <Project width={width} />
                    <Experience width={width} />
                    <Contact width={width} />
                    <Footer width={width} />
                </Fragment>
            }
        </Fragment>
    )
}

export default Index