import type { Metadata } from "next"
import { Roboto } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

import "../styles/globals.css"

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "700"] })

export const metadata: Metadata = {
	title: "W-Spell",
	description: "Uma aplicação intuitiva para criar e gerenciar magias em partidas de RPG.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt" suppressHydrationWarning>
			<body
				className={`${roboto.className} min-h-screen bg-gradient-to-b from-background via-10% to-accent text-foreground relative`}
			>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
