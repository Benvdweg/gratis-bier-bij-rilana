import Image from "next/image";

interface ChampionCardProps {
	name: string;
	edition: string[];
}

export function ChampionCard({ name, edition }: ChampionCardProps) {
	return (
		<div className="flex flex-row bg-gray-200 shadow-xl mt-4 sm:mt-8 rounded-xl py-3">
			<div className="my-auto ml-3">
				<Image
					src="/icons/gold-medal.svg"
					alt="Gold Medal"
					width={48}
					height={48}
				/>
			</div>
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
