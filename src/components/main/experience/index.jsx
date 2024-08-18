import { Suspense, lazy } from 'react'
import Loading from '../../loading';

// load necessary components when needed
const ExperienceDesktop = lazy(() => import('./desktop/index'));
const ExperienceMobile = lazy(() => import('./mobile/index'));

function Experience({ width }) {

    const itemsTimeline = [
        {
            title: "November 2023 - Present"
        },
        {
            title: "March 2023 - December 2023"
        },
        {
            title: "August 2022 - December 2022"
        },
        {
            title: "February 2022 - July 2022"
        }
    ];

    return (
        <Suspense fallback={<Loading />}>
            {
                width >= 768 ? <ExperienceDesktop itemsTimeline={itemsTimeline} /> : <ExperienceMobile itemsTimeline={itemsTimeline} />
            }
        </Suspense>
    )
}

export default Experience