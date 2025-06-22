interface ChampionCardProps {
	name: string;
	edition: string[];
}

export function ChampionCard({ name, edition }: ChampionCardProps) {
	return (
		<div className="flex flex-row bg-gray-200 shadow-xl mt-4 sm:mt-8 rounded-xl py-3">
			<div className="my-auto text-2xl sm:text-3xl ml-3">🥇</div>
			<div className="ml-3">
				<p className="font-bold text-lg sm:text-base">{name}</p>
				{edition.map((ed, index) => (
					<p key={index} className="text-sm sm:text-base">
						{ed}
					</p>
				))}
			</div>
		</div>
	);
}
