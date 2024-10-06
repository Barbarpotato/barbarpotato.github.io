import { useQuery } from "react-query";

/**
 * Fetches all blogs from the backend server.
 *
 * @return {Promise} A promise that resolves with the JSON response containing the fetched blogs.
 */
const fetchBlogs = async (searchQuery) => {
    let url = "";
    if (searchQuery != "") url = `${import.meta.env.VITE_CERBERRY_ENDPOINT}/blogs/search?title=${searchQuery}`;
    else url = `${import.meta.env.VITE_CERBERRY_ENDPOINT}/blogs/all`;

    const response = await fetch(url, {
        method: 'GET',
    })
    if (!response.ok) throw new Error('Failed to fetch blogs')
    return response.json()
}


/**
 * Returns the result of a query for fetching blogs data.
 *
 * @return {object} The result of the query for fetching blogs data.
 */
export const useDatablogs = (searchQuery) => {
    return useQuery('blogs-data', () => fetchBlogs(searchQuery), {
        cacheTime: 3600000,
        staleTime: 1800000
    })
}


/**
 * Fetches the latest blog from the backend server.
 * 
 * @return {Promise} A promise that resolves with the JSON response containing the fetched blog.
 */
const fetchBlogLatest = async () => {

    const url = `${import.meta.env.VITE_CERBERRY_ENDPOINT}/blogs/latest`;

    const response = await fetch(url, {
        method: 'GET',
    })
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

/**
 * Fetches the details of a blog using the blog ID.
 *
 * @param {String} blogId - The ID of the blog to fetch details for
 * @return {Promise} A promise that resolves with the JSON representation of the blog details
 */
const fetchBlogDetail = async (blogId) => {
    const url = `${import.meta.env.VITE_CERBERRY_ENDPOINT}/blogs/${blogId}`;

    const response = await fetch(url, {
        method: 'GET',
    })
    if (!response.ok) throw new Error('Failed to fetch blogs')
    return response.json()
}


/**
 * Returns the result of a query for fetching blog data by Id.
 *
 * @param {String} blogId - The ID of the blog to fetch
 * @return {Object} The blog detail data
 */
export const useDataBlogDetail = (blogId) => {
    return useQuery(['blog', blogId], () => fetchBlogDetail(blogId), {
        cacheTime: 3600000,
        staleTime: 1800000
    })
}
