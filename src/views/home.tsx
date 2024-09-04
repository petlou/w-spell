"use client"

import * as React from "react"

import { Button } from "@shadcn-ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@shadcn-ui/card"
import { Input } from "@shadcn-ui/input"
import { Label } from "@shadcn-ui/label"

export function HomeView() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen px-8">
			<Card>
				<CardHeader>
					<CardTitle>Crie seu personagem</CardTitle>
					<CardDescription>
						Crie um novo personagem ou acesse um personagem já criado.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Nome</Label>
								<Input id="name" placeholder="Nome do personagem" />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="justify-end">
					<Button>Criar</Button>
				</CardFooter>
			</Card>
		</main>
	)
}
