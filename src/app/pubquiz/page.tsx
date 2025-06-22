import ChampionCard from "./components/ChampionCard";

export default function PubquizPage() {
	return (
		<div className="mt-32 bg-[#fcfbfb] w-200 mx-auto p-8 rounded-xl">
			<h1 className="text-black  font-bold text-4xl text-center">
				🏆 Hall of Champions
			</h1>
			<div className="text-gray-800 text-2xl mb-6">
				<ChampionCard name={"Ben"} edition={["Tsjechië", "AI"]} />
				<ChampionCard name={"Tijmen"} edition={["Tenzin Editie"]} />
				<ChampionCard name={"Nick"} edition={["Kempervennen"]} />
			</div>
		</div>
	);
}
