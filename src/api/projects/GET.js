import { useQuery } from "react-query";

const fetchProjects = async () => {
    const url = `/data/projects.json`;

    const response = await fetch(url, {
        method: 'GET',
    })

    if (!response.ok) throw new Error('Failed to fetch projects')
    return response.json()
}

export const useDataProjects = () => {
    return useQuery("projects", () => fetchProjects(), {
        cacheTime: 3600000,
        staleTime: 1800000,
        select: (data) => data.data
    })
}
