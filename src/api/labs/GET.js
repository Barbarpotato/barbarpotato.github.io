import { useQuery } from "react-query";

/**
 * Fetches the latest blog from the backend server.
 * 
 * @return {Promise} A promise that resolves with the JSON response containing the fetched blog.
 */
const fetchBlogLatest = async () => {

    // **
    // using public json data for efficiency
    const url = `/data/blog_latest.json`;

    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed to fetch blogs')
    return response.json()
}


/**
 * Returns the result of a query for fetching latest blog data.
 * 
 * @return {object} The result of the query for fetching latest blog data.
 */
export const useDataBlogLatest = () => {
    return useQuery('blog-latest', () => fetchBlogLatest(), {
        cacheTime: 3600000,
        staleTime: 1800000
    })
}

