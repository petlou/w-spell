import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@shadcn/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@shadcn/card"
import { Input } from "@shadcn/input"
import { Label } from "@shadcn/label"

import { ErrorMessage } from "@components/shared/errorMessage"

const generateSlug = (name: string) => {
	return name
		.replace(/([a-z])([A-Z])/g, "$1-$2") // Adiciona hífen entre camelCase
		.toLowerCase()
		.replace(/[_\W]+/g, "-") // Remove caracteres especiais e underscores, substituindo por hífen
		.trim()
		.replace(/^-+|-+$/g, "") // Remove hífens no início ou no fim da string
		.replace(/--+/g, "-") // Substitui múltiplos hífens consecutivos por um único hífen
}

const characterSchema = z.object({
	name: z.string().min(3, "Mínimo de 3 caracteres"),
	slug: z.string().min(3, "O nome não é válido"),
})

type CharacterFormType = z.infer<typeof characterSchema>

export function CreateCardForm() {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		clearErrors,
		formState: { errors },
	} = useForm<CharacterFormType>({
		resolver: zodResolver(characterSchema),
	})

	const nameValue = watch("name")

	useEffect(() => {
		if (nameValue) {
			const slugValue = generateSlug(nameValue)
			setValue("slug", slugValue)

			if (slugValue.length >= 3) {
				clearErrors("slug")
			}
		}
	}, [nameValue])

	const onSubmit = (data: CharacterFormType) => {
		console.log(data)
	}

	return (
		<Card className="shadow-lg shadow-foreground/10">
			<CardHeader>
				<CardTitle>Crie seu personagem</CardTitle>
				<CardDescription>
					Crie um novo personagem ou acesse um personagem já criado.
				</CardDescription>
			</CardHeader>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CardContent>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name" className={(errors.name || errors.slug) && "text-red-800"}>
								Nome
							</Label>
							<Input
								{...register("name")}
								placeholder="Nome do personagem"
								className={
									(errors.name || errors.slug) &&
									"text-red-800 border-red-300 focus-visible:ring-0 focus-visible:border-red-800 placeholder:text-red-300"
								}
							/>
							<ErrorMessage message={errors?.name?.message} />
							<ErrorMessage message={errors?.slug?.message} />
						</div>
					</div>
				</CardContent>
				<CardFooter className="justify-end">
					<input type="hidden" {...register("slug")} />
					<Button type="submit">Acessar/Criar</Button>
				</CardFooter>
			</form>
		</Card>
	)
}
