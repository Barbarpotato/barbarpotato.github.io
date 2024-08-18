import { Suspense, lazy, useCallback } from 'react'
import Typewriter from 'typewriter-effect';
import Loading from '../../loading';

// load necessary components when needed
const HeroDesktop = lazy(() => import('./desktop/index'));
const HeroMobile = lazy(() => import('./mobile/index'));

function Hero({ typeWriter, width }) {

    const renderTypewriter = useCallback(() => (
        <Typewriter
            options={{
                strings: typeWriter,
                autoStart: true,
                loop: true,
                deleteSpeed: 15,
            }}
        />
    ), [typeWriter]);

    return (
        <Suspense fallback={<Loading />}>
            {width >= 1280 ?
                <HeroDesktop renderTypewriter={renderTypewriter} width={width} />
                :
                <HeroMobile renderTypewriter={renderTypewriter} width={width} />}
        </Suspense >
    )
}

export default Hero