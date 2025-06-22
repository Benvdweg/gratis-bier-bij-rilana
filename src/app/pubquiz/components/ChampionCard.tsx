interface ChampionCardProps {
	name: string;
	edition: string[];
}

export default function ChampionCard({ name, edition }: ChampionCardProps) {
	return (
		<div className="flex flex-row bg-gray-200 shadow-xl mt-8 rounded-xl py-3">
			<div className="my-auto text-3xl ml-3">🥇</div>
			<div className="ml-3">
				<p className="font-bold">{name}</p>
				{edition.map((ed, index) => (
					<p key={index}>{ed}</p>
				))}
			</div>
		</div>
	);
}
