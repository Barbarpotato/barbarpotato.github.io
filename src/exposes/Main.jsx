// Core Modules
import { Fragment } from 'react'
import { motion } from 'framer-motion'


// Expose Modules
import OnBoarding from './Body/Onboarding'
import Hero from './Body/Hero'
import Labs from './Body/Labs'

import { Navigation, Footer, Darwin } from 'personal-shared-layout'
import Projects from './Body/Projects'

function Portfolio() {

    return (
        <Fragment>
            <Darwin />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Navigation />
            </motion.div>

            <Hero />
            <OnBoarding />
            <Labs />
            <Projects />



            <Footer />
        </Fragment>
    )
}

export default Portfolio