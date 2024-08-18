import { Suspense, lazy, useState } from 'react'
import Loading from '../../loading';

// load necessary components when needed
const ContentDesktop = lazy(() => import('./desktop/index'));
const ContentMobile = lazy(() => import('./mobile/index'));

function Content({ blog, itemsPerPage, width }) {

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = blog?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blog?.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blog.length;
        setItemOffset(newOffset);
    };

    return (
        <Suspense fallback={<Loading />}>
            {width >= 768 ?
                <ContentDesktop width={width} currentItems={currentItems} pageCount={pageCount} handlePageClick={handlePageClick} />
                :
                <ContentMobile currentItems={currentItems} pageCount={pageCount} handlePageClick={handlePageClick} />
            }
        </Suspense>
    )
}

export default Content