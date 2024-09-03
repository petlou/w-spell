import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "../styles/globals.css"

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "700"] })

export const metadata: Metadata = {
	title: "Wizard SpellBook",
	description: "Uma aplicação intuitiva para criar e gerenciar magias em partidas de RPG.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt">
			<body className={`${roboto.className} bg-slate-900 text-slate-100`}>{children}</body>
		</html>
	)
}
