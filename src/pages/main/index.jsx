import React, { Fragment } from 'react'
import { useAboutme, useProjects, useTypeWriter } from '../../api/hecate'
import Loading from '../../components/loading/index'
import Navigation from '../../components/navigation/index'
import ChatbotButton from '../../components/chatbot/ChatbotButton'
import Hero from '../../components/main/hero/index'
import About from '../../components/main/about/index'
import Project from '../../components/main/project/index'
import Experience from '../../components/main/experience/index'
import Contact from '../../components/main/contact/index'
import Footer from '../../components/footer'
import 'react-chatbot-kit/build/main.css'
import useWindowSize from '../../hooks/useWindowSize'

function Index() {

    // feteching all necessary data and pass it to the components
    const { data: typeWriter } = useTypeWriter();
    const { data: aboutMe, isLoading: isLoadingAboutMe } = useAboutme();
    const { data: projects = [], isLoading: isLoadingProject } = useProjects();

    // centralizing the width hook state
    const { width } = useWindowSize()

    return (
        <Fragment>
            <Navigation width={width} />
            <ChatbotButton />
            <Hero typeWriter={typeWriter} width={width} />
            <About isLoading={isLoadingAboutMe} aboutMe={aboutMe} width={width} />
            <Project isLoading={isLoadingProject} contents={projects} width={width} />
            <Experience width={width} />
            <Contact width={width} />
            <Footer width={width} />
        </Fragment>
    )
}

export default Index