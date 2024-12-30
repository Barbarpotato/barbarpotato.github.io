import { lazy, Suspense } from 'react';
import { useQuery } from 'react-query';

import { RequestResource } from '../api/PROXY';

import Loading from '../components/Loading';

const Portfolio = lazy(() => import("site_registry/Portfolio"));

function Main() {
    // Use React Query to fetch the token using RequestResource
    const { data, isLoading, isError } = useQuery(
        'client-token',
        RequestResource,
        {
            staleTime: 55 * 60 * 1000,
            cacheTime: 55 * 60 * 1000,
        }
    );

    if (isLoading || isError) return <Loading />;

    const token = data?.token; // Extract token from the fetched data

    if (!token) return <Loading />

    return (
        <Suspense fallback={<Loading />}>
            <Portfolio token={token} />
        </Suspense>
    );
}

export default Main