import { useQuery } from "react-query";

/**
 * Fetches all tpyewriter from the backend server.
 *
 * @return {Promise} A promise that resolves with the JSON response containing the fetched tpyewriter data.
 */
const fetchTypewriter = async () => {

    const url = `${import.meta.env.VITE_HECATE_ENDPOINT}/api/typewriter`;

    const response = await fetch(url, {
        method: 'GET',
    })
    if (!response.ok) throw new Error('Failed to fetch typewriter data')
    return response.json()
}

/**
 * Returns the result of a query for fetching typewriter data.
 *
 * @return {object} The result of the query for fetching typewriter data.
 */
export const useTypeWriter = () => {
    return useQuery('typwriter-data', () => fetchTypewriter(), {
        cacheTime: 3600000,
        staleTime: 3600000,
        select: (data) => {
            if (data.length > 0) return data.map(object => object.title)
            else return []
        }
    })
}

/**
 * Fetches all aboutme from the backend server.
 *
 * @return {Promise} A promise that resolves with the JSON response containing the fetched aboutme data.
 */
const fetchAboutme = async () => {

    const url = `${import.meta.env.VITE_HECATE_ENDPOINT}/api/aboutme`;

    const response = await fetch(url, {
        method: 'GET',
    })
    if (!response.ok) throw new Error('Failed to fetch typewriter data')
    return response.json()
}

/**
 * Returns the result of a query for fetching typewriter data.
 *
 * @return {object} The result of the query for fetching typewriter data.
 */
export const useAboutme = () => {
    return useQuery('aboutme-data', () => fetchAboutme(), {
        cacheTime: 3600000,
        staleTime: 3600000,
        select: (data) => {
            if (data.length > 0) return data[0].content
            else return ""
        }
    })
}

/**
 * Fetches all projects from the backend server.
 *
 * @return {Promise} A promise that resolves with the JSON response containing the fetched projects data.
 */
const fetchProjects = async () => {

    const url = `${import.meta.env.VITE_HECATE_ENDPOINT}/api/projects`;

    const response = await fetch(url, {
        method: 'GET',
    })
    if (!response.ok) throw new Error('Failed to fetch typewriter data')
    return response.json()
}

/**
 * Returns the result of a query for fetching projects data.
 *
 * @return {object} The result of the query for fetching projects data.
 */
export const useProjects = () => {
    return useQuery('projects-data', () => fetchProjects(), {
        cacheTime: 3600000,
        staleTime: 3600000,
    })
}