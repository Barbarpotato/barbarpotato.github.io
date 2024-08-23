import { Suspense, lazy, useMemo } from 'react'
import Loading from '../../loading';

// load necessary components when needed
const AboutDesktop = lazy(() => import('./desktop/index'));
const AboutTablet = lazy(() => import('./tablet/index'));
const AboutMobile = lazy(() => import('./mobile/index'));

function About({ aboutMe, width }) {

    const avatarUrl = useMemo(() => "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/blog-content%2FAvatar.webp?alt=media&token=4eac6e1c-e936-41c5-b1e6-320444542537", []);
    const resumeUrl = useMemo(() => "https://firebasestorage.googleapis.com/v0/b/personal-blog-darmajr.appspot.com/o/personal%2FProfile.pdf?alt=media&token=e1d899ea-4b26-4449-b446-8d4374a2b07a", []);

    const contentStyle = useMemo(() => ({
        marginBottom: '10px', textAlign: 'justify', whiteSpace: 'pre-wrap',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica',
        fontSize: '20px'
    }), []);

    return (
        <Suspense fallback={<Loading />}>
            {width >= 1280 ? <AboutDesktop aboutMe={aboutMe} contentStyle={contentStyle} avatarUrl={avatarUrl} resumeUrl={resumeUrl} /> :
                width >= 768 && width < 1280 ? <AboutTablet aboutMe={aboutMe} contentStyle={contentStyle} avatarUrl={avatarUrl} resumeUrl={resumeUrl} /> :
                    <AboutMobile aboutMe={aboutMe} contentStyle={contentStyle} avatarUrl={avatarUrl} resumeUrl={resumeUrl} />
            }
        </Suspense>
    )
}

export default About