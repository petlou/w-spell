import Link from "next/link"

export default function Character({ params }: { params: { slug: string } }) {
	return (
		<>
			<h1>Character Works</h1>
			<Link href={`/character/${params.slug}/spells`}>Go to spells</Link>
		</>
	)
}
