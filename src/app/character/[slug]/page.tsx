import { CharacterView } from "@views/character"

export default function Character({ params }: { params: { slug: string } }) {
	return <CharacterView slug={params.slug} />
}
