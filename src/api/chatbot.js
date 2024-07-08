export const dictionaryAPI = async (searchQuery) => {

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`;

    const response = await fetch(url)

    if (!response.ok) throw new Error('Failed to load data dictionary')
    

    return response.json()
}

