import { Suspense, lazy, useEffect, useState } from 'react'
import Loading from '../loading';

// load necessary components when needed
const FooterDesktop = lazy(() => import('./desktop/index'));
const FooterMobile = lazy(() => import('./mobile/index'));

function Footer({ width }) {

    const [year, setYear] = useState();

    useEffect(() => {
        const currentDate = new Date();
        setYear(currentDate.getFullYear());
    }, [])

    return (
        <Suspense fallback={<Loading />}>

            {width >= 768 ?
                <FooterDesktop year={year} />
                :
                <FooterMobile year={year} />
            }
        </Suspense>
    )
}

export default Footer