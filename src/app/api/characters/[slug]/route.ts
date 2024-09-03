import { NextResponse } from "next/server"
import { prisma } from "@lib/prisma"

export async function GET(_: Request, { params }: { params: { slug: string } }) {
	const { slug } = params

	try {
		const character = await prisma.character.findUnique({
			where: { slug },
		})

		if (!character) {
			return NextResponse.json({ error: "O Personagem não existe" }, { status: 404 })
		}

		return NextResponse.json(character, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Ops! Algo deu errado..." }, { status: 500 })
	}
}
