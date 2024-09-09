"use client"
import { ToggleTheme } from "@components/shared/togleThemeButton"
import { CreateCardForm } from "@components/home/cardCreateForm"

export function HomeView() {
	return (
		<div className="flex flex-col items-center justify-center min-h-dvh">
			<CreateCardForm />
			<ToggleTheme />
		</div>
	)
}
