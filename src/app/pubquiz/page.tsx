import { ChampionCard } from "./components/ChampionCard";

export default function PubquizPage() {
	return (
		<div className="px-4 sm:px-0">
			<div className="mt-8 sm:mt-16 md:mt-32 bg-[#fcfbfb] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
				<h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6">
					🏆 Hall of Champions
				</h1>
				<div className="text-gray-800">
					<ChampionCard name={"Ben"} edition={["Tsjechië", "AI"]} />
					<ChampionCard name={"Tijmen"} edition={["Tenzin Editie"]} />
					<ChampionCard name={"Nick"} edition={["Kempervennen"]} />
				</div>
			</div>
		</div>
	);
}
