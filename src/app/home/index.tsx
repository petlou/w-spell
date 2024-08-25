import Image from "next/image"

import spellbook from "@assets/spellbook.png"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-8 bg-zinc-900 text-slate-100">
			<div className="flex items-center justify-center gap-6">
				<Image src={spellbook} alt="Imagem de livro de magias" width={40} />
				<h1 className="text-2xl">Wizard SpellBook</h1>
			</div>
		</main>
	)
}
