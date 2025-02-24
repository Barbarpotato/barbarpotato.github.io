// Core Modules
import { Fragment } from 'react'

// Expose Modules
import Darwin from './Body/Darwin'
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
            <Darwin />
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