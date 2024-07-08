/**
 * Send a contact message using the provided request body.
 *
 * @param {Object} reqBody - The request body for the message -> {name, email, message}
 * @return {Promise<Object>} A promise that resolves to the JSON response from the server
 */
export const sendContactMessage = async (reqBody) => {

    const url = `${import.meta.env.VITE_CERBERRY_ENDPOINT}/form/contact_us`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}