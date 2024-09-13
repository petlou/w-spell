import { APIError } from "./apiErrorService"

interface HttpClient {
	request<T>(url: string, options?: RequestInit): Promise<T>
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
console.log("url => ", BASE_URL)

class FetchHttpClient implements HttpClient {
	async request<T>(url: string, options?: RequestInit): Promise<T> {
		const response = await fetch(url, options)
		const data = await response.json()

		if (!response.ok) {
			throw new APIError(data.error || "Erro na API", response.status)
		}

		return data
	}
}

class ExternalApiService {
	private client: HttpClient

	constructor(client: HttpClient) {
		this.client = client
	}

	async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
		return this.client.request<T>(`${BASE_URL}${endpoint}`, options)
	}
}

export const externalApiService = new ExternalApiService(new FetchHttpClient())
