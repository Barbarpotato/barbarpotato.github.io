export const RequestResource = async () => {
    const url = `https://coretify.vercel.app/proxy/requester`;

    const response = await fetch(url, {
        method: 'GET',
    })

    if (!response.ok) throw new Error('Failed to request data')
    return response.json()
}
