import Image from "next/image"

import Spellbook from "@assets/spellbook.png"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-8 ">
			<div className="flex items-center justify-center gap-6">
				<Image src={Spellbook} alt="Imagem de livro de magias" width={40} />
				<h1 className="text-2xl">Wizard SpellBook</h1>
			</div>
		</main>
	)
}
