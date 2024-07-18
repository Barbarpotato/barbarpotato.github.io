import { useQuery } from "react-query";

/**
 * Fetches all tpyewriter from the backend server.
 *
 * @return {Promise} A promise that resolves with the JSON response containing the fetched tpyewriter data.
 */
const fetchTypewriter = async () => {

    const url = `https://hecate-cms.vercel.app/api/typewriter`;

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
        select: (data) => {
            if (data.length > 0) return data.map(object => object.title)
            else return []
        }
    })
}