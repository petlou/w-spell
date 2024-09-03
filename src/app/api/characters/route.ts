import { NextResponse } from "next/server"
import { prisma } from "@lib/prisma"

export async function GET() {
	try {
		const character = await prisma.character.findMany()

		return NextResponse.json(character, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Ops! Algo deu errado..." }, { status: 500 })
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json()

		if (!body.slug) {
			return NextResponse.json({ error: "O Nome do Personagem é obrigatório!" }, { status: 400 })
		}

		const characterExists = await prisma.character.findFirst({
			where: { slug: body.slug },
		})

		if (characterExists) {
			const { slug, name } = characterExists
			return NextResponse.json({ slug, name }, { status: 200 })
		}

		const { slug, name } = await prisma.character.create({
			data: {
				slug: body.slug,
				name: body.name,
			},
		})

		return NextResponse.json({ slug, name }, { status: 201 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Ops! Algo deu errado..." }, { status: 500 })
	}
}
