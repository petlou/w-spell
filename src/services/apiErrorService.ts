export class APIError extends Error {
	public statusCode: number

	constructor(message: string, statusCode: number) {
		super(message)
		this.name = this.constructor.name
		this.statusCode = statusCode

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor)
		}
	}
}
