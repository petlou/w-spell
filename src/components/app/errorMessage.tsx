interface ErrorMessageProps {
	message?: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
	return <span className="text-sm text-right italic text-red-800">{message}</span>
}
