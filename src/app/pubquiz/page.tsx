"use client";

import { useEffect, useState } from "react";
import { PubquizService } from "@/services/PubquizService";
import { ChampionCard } from "./components/ChampionCard";
import { Champion } from "@/types/champion";

const pubquizService = new PubquizService();

export default function PubquizPage() {
	const [champions, setChampions] = useState<Champion[]>([]);
	const [loading, setLoading] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		async function fetchChampions() {
			try {
				const championsData = await pubquizService.getAllChampions();
				setChampions(championsData);
				console.log("Champions loaded:", championsData);
			} catch (error) {
				console.error("Error fetching champions:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchChampions();
	}, []);

	if (!mounted) {
		return (
			<div className="px-4 sm:px-0">
				<div className="mt-8 sm:mt-16 md:mt-32 bg-[#fcfbfb] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
					<h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6">
						🏆 Hall of Champions
					</h1>
					<div className="flex justify-center items-center h-64 text-gray-600">
						Loading...
					</div>
				</div>
			</div>
		);
	}

	const topThree = champions
		.sort((a, b) => b.editions.length - a.editions.length)
		.slice(0, 3);

	console.log(topThree);

	if (loading) {
		return (
			<div className="px-4 sm:px-0">
				<div className="mt-8 sm:mt-16 md:mt-32 bg-[#fcfbfb] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
					<h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6">
						🏆 Hall of Champions
					</h1>
					<div className="flex justify-center items-center h-64 text-gray-600">
						Loading champions...
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="px-4 sm:px-0">
			<div className="mt-8 sm:mt-16 md:mt-32 bg-[#fcfbfb] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
				<h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6">
					🏆 Hall of Champions
				</h1>
				<div className="text-gray-800">
					{topThree.map(({ player_name, editions }) => (
						<ChampionCard
							key={player_name}
							name={player_name}
							edition={editions}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
