"use client";

import { useEffect } from "react";
import { PubquizService } from "@/services/PubquizService";
import { ChampionCard } from "./components/ChampionCard";

const pubquizService = new PubquizService();

export default function PubquizPage() {
	useEffect(() => {
		async function fetchChampions() {
			try {
				const champions = await pubquizService.getAllChampions();
				console.log("Fetched champions:", champions);
			} catch (error) {
				console.error("Error fetching champions:", error);
			}
		}
		fetchChampions();
	}, []);

	return (
		<div className="px-4 sm:px-0">
			<div className="mt-8 sm:mt-16 md:mt-32 bg-[#fcfbfb] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
				<h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6">
					🏆 Hall of Champions
				</h1>
				<div className="text-gray-800">
					<ChampionCard
						name={"Ben"}
						edition={["Tsjechië", "ChatGPT Editie"]}
					/>
					<ChampionCard name={"Tijmen"} edition={["Tenzin Editie"]} />
					<ChampionCard name={"Nick"} edition={["Kempervennen"]} />
				</div>
			</div>
		</div>
	);
}
