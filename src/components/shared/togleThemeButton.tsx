"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { Button } from "@shadcn/button"

export function ToggleTheme() {
	const { theme, setTheme } = useTheme()

	function onChangeTheme() {
		if (theme === "dark") setTheme("light")

		if (theme === "light") setTheme("dark")
	}

	return (
		<Button
			className="absolute top-8 right-8"
			onClick={onChangeTheme}
			variant="outline"
			size="icon"
		>
			<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	)
}
