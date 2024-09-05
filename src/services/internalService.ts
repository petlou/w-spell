import { APIError } from "./apiErrorService"

interface HttpClient {
	request<T>(url: string, options?: RequestInit): Promise<T>
}

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

class APIService {
	private client: HttpClient

	constructor(client: HttpClient) {
		this.client = client
	}

	async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
		return this.client.request<T>(`/api/${endpoint}`, options)
	}

	async post<T>(endpoint: string, body: any, options?: RequestInit): Promise<T> {
		return this.client.request<T>(`/api/${endpoint}`, {
			...options,
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				...(options?.headers || {}),
			},
		})
	}
}

export const apiService = new APIService(new FetchHttpClient())
