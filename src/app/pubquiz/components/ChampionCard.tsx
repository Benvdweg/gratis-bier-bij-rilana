interface ChampionCardProps {
	name: string;
	edition: string[];
}

export function ChampionCard({ name, edition }: ChampionCardProps) {
	return (
		<div className="flex flex-col sm:flex-row bg-gray-200 shadow-xl mt-4 sm:mt-8 rounded-xl p-3 sm:py-3 mx-2 sm:mx-0">
			<div className="text-2xl sm:text-3xl mb-2 sm:mb-0 sm:my-auto sm:ml-3 text-center sm:text-left">
				🥇
			</div>
			<div className="sm:ml-3 text-center sm:text-left">
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
