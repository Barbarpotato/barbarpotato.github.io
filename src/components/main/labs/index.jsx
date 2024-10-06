import React, { lazy, Suspense } from 'react'
import Loading from '../../loading'

// load necessary components when needed
const LandingLabMobile = lazy(() => import('./mobile/index'))
const LandingLabDesktop = lazy(() => import('./desktop/index'))

function LandingLab({ width, blogs }) {
    return (
        <Suspense fallback={<Loading />}>   
            {
                width >= 1280 ? <LandingLabDesktop blogs={blogs} /> : <LandingLabMobile blogs={blogs} />
            }
        </Suspense>
    )
}

export default LandingLab