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
import LandingLab from '../../components/main/labs'
import { useDataBlogLatest } from '../../api/blog'

function Index() {

    // feteching all necessary data and pass it to the components
    const { data: typeWriter } = useTypeWriter();
    const { data: aboutMe, isLoading: isLoadingAboutMe } = useAboutme();
    const { data: projects, isLoading: isLoadingProject } = useProjects();
    const { data: latestLabs, isLoading: isLoadingLabs } = useDataBlogLatest();

    // make sure all data is loaded before rendering
    const isLoading = isLoadingAboutMe || isLoadingProject || isLoadingLabs

    // centralizing the width hook state
    const { width } = useWindowSize()

    return (
        <Fragment>

            <Fragment>
                <Navigation width={width} />
                <ChatbotButton />
                <Hero typeWriter={typeWriter} width={width} />
                {
                    isLoading ? <Loading />
                        :
                        <Fragment>
                            <About aboutMe={aboutMe} width={width} />
                            <LandingLab width={width} blogs={latestLabs} />
                            <Project contents={projects} width={width} />
                            <Experience width={width} />
                            <Contact width={width} />
                        </Fragment>
                }
                <Footer width={width} />
            </Fragment>

        </Fragment>
    )
}

export default Index