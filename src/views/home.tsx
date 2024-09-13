"use client"

import { CreateCardForm } from "@components/home/cardCreateForm"

export function HomeView() {
	return (
		<div className="flex flex-col items-center justify-center min-h-dvh">
			<CreateCardForm />
		</div>
	)
}
