import Image from "next/image"

import EvocationSchool from "@assets/schools/evocation.png"

export function Card() {
	return (
		<div className="flex flex-col gap-2 rounded-lg w-72 p-2 bg-slate-400 shadow-xl text-slate-900 text-sm">
			<div className="flex flex-col items-center justify-center">
				<Image src={EvocationSchool} alt="Escola de adivinhação" className="rounded-full w-10" />
				<h4 className="text-lg font-bold">Bola de fogo</h4>
			</div>
			<div className="grid grid-cols-2 gap-4 rounded-md bg-slate-50 shadow-xl p-2">
				<div className="flex flex-col gap-2">
					<div>
						<p className="text-xs">Tempo de conjuração</p>
						<p>1 ação</p>
					</div>
					<div>
						<p className="text-xs">Alcance</p>
						<p>45 metros</p>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div>
						<p className="text-xs">Componente</p>
						<p>V, S, M</p>
					</div>
					<div>
						<p className="text-xs">Duração</p>
						<p>Concentração, até 1 minuto</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col rounded-md bg-slate-50 shadow-xl p-2">
				<p>
					Uma explosão de fogo surge em um ponto escolhido. Criaturas em um raio de 6 metros fazem
					um teste de Destreza; falha resulta em 8d6 de dano de fogo (metade em sucesso). Incendeia
					objetos inflamáveis.
				</p>
				<h2 className="font-bold mt-4">Em níveis superiores:</h2>
				<p>+1d6 de dano por nível acima do 3º</p>
			</div>
		</div>
	)
}
