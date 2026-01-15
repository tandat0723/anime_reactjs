const BASE_URL = "http://dragonball-api.com/api"

export async function get(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`)

    if (!response.ok) {
        throw new Error("API error")
    }

    return response.json()
}