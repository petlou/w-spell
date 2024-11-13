"use client"
import { useEffect } from "react"
import { ExitIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"

import { Button } from "@shadcn/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@shadcn/card"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@shadcn/select"

import { externalApiService } from "@services/externalService"

interface CharacterViewProps {
	slug: string
}

export function CharacterView({ slug }: CharacterViewProps) {
	const router = useRouter()

	useEffect(() => {
		getClass()
	}, [])

	async function getClass() {
		const response = await externalApiService.get("/classes/")
		console.log("response => ", response)
	}

	function handleChangeClass(value: string) {
		console.log(value)
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="flex items-center justify-between px-4 w-[calc(100%-7rem)] h-9 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-accent text-accent-foreground absolute left-8 top-8">
				<div className="flex items-center">
					<span>Gorn Iron Hammer</span>
					<hr className="h-4 border-x border-accent-foreground m-4" />
					<span>Clérigo</span>
				</div>
				<ExitIcon className="cursor-pointer" onClick={() => router.push("/")} />
			</div>
			<Card className="w-full max-w-80">
				<CardHeader>
					<CardTitle>Defina sua classe</CardTitle>
					<CardDescription>
						<Select onValueChange={handleChangeClass}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select a fruit" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel className="font-normal">Clérigo</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="blueberry">Blueberry</SelectItem>
									<SelectItem value="grapes">Grapes</SelectItem>
									<SelectItem value="pineapple">Pineapple</SelectItem>
								</SelectGroup>
								<hr />
								<SelectGroup>
									<SelectLabel>Mago</SelectLabel>
									<SelectItem value="apple1">Apple</SelectItem>
									<SelectItem value="banana1">Banana</SelectItem>
									<SelectItem value="blueberry1">Blueberry</SelectItem>
									<SelectItem value="grapes1">Grapes</SelectItem>
									<SelectItem value="pineapple1">Pineapple</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid items-center gap-4">
						<div className="flex flex-col space-y-1.5">{slug}</div>
					</div>
				</CardContent>
				<CardFooter className="justify-end">
					<Button type="button">Spells</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
