
/**
 * Send a contact message using the provided request body.
 *
 * @param {Object} reqBody - The request body for the message -> {name, email, message}
 * @return {Promise<Object>} A promise that resolves to the JSON response from the server
 */
export const sendContactMessage = async (reqBody) => {

    const url = `https://api-barbarpotato.vercel.app/contact`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}