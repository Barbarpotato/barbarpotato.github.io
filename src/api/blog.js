import { useQuery } from "react-query";

/**
 * Fetches all blogs from the backend server.
 *
 * @return {Promise} A promise that resolves with the JSON response containing the fetched blogs.
 */
const fetchBlogs = async (searchQuery) => {
    const username = import.meta.env.VITE_USERNAME;
    const password = import.meta.env.VITE_PASSWORD;

    let url = "";
    if (searchQuery != "") url = `${import.meta.env.VITE_CERBERRY_ENDPOINT}/blogs/search?title=${searchQuery}`;
    else url = `${import.meta.env.VITE_CERBERRY_ENDPOINT}/blogs/all`;

    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

    const response = await fetch(url, {
        method: 'GET',
        headers: headers
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
        cacheTime: 3600000
    })
}


/**
 * Fetches the details of a blog using the blog ID.
 *
 * @param {String} blogId - The ID of the blog to fetch details for
 * @return {Promise} A promise that resolves with the JSON representation of the blog details
 */
const fetchBlogDetail = async (blogId) => {
    const username = import.meta.env.VITE_USERNAME;
    const password = import.meta.env.VITE_PASSWORD;
    const url = `${import.meta.env.VITE_CERBERRY_ENDPOINT}/blog/${blogId}`;

    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

    const response = await fetch(url, {
        method: 'GET',
        headers: headers
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
        select: (data) => {
            if (data.length > 0) {
                return data[0]
            }
        }
    })
}
