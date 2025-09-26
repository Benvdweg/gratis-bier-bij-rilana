"use client";

import { useEffect, useState } from "react";
import { PubquizGroup, PubquizService } from "@/services/PubquizService";
import Image from "next/image";
import { LoadingCard } from "./components/LoadingCard";

const pubquizService = new PubquizService();
const PAGE_TITLE = "🏆 Hall of Fame 🏆";

export default function PubquizPage() {
	const [averagePlacements, setAveragePlacements] = useState<
		Array<{
			player_name: string;
			average_placement: number;
			total_quizzes: number;
		}>
	>([]);
	const [pubquizGroups, setPubquizGroups] = useState<PubquizGroup[]>([]);
	const [loading, setLoading] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		async function fetchAveragePlacements() {
			try {
				const averagePlacementsData =
					await pubquizService.getPlayerAverages();
				const pubquizGroupsData =
					await pubquizService.getPlacementsPerSeason();
				setAveragePlacements(averagePlacementsData);
				setPubquizGroups(pubquizGroupsData);
			} catch (error) {
				console.error("Error fetching top three:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchAveragePlacements();
	}, []);

	if (!mounted || loading) {
		return <LoadingCard />;
	}

	const gold = averagePlacements[0];
	const silver = averagePlacements[1];
	const bronze = averagePlacements[2];

	console.log(pubquizGroups);

	return (
		<div className="px-3 sm:px-4 lg:px-0">
			<div className="mt-2 sm:mt-4 md:mt-8 bg-gradient-to-b from-[#fcfbfb] to-[#f5f5f5] max-w-4xl mx-auto p-3 sm:p-6 md:p-8 rounded-xl shadow-lg">
				<h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-6 sm:mb-8 lg:mb-12 drop-shadow-md leading-tight">
					{PAGE_TITLE}
				</h1>
				<div className="flex justify-center items-end gap-2 sm:gap-4 md:gap-6 lg:gap-8">
					{/* Silver (2nd place) - Left */}
					{silver && (
						<div className="flex flex-col items-center w-1/3">
							<div className="bg-gradient-to-b from-[#c0c0c0] to-[#a8a8a8] text-white font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-2 sm:py-4 md:py-6 rounded-t-lg shadow-md h-24 sm:h-32 md:h-40 w-full flex flex-col justify-center">
								<p className="truncate px-1">
									{silver.player_name}
								</p>
								<p className="text-xs sm:text-sm md:text-base mt-1">
									{silver.average_placement.toFixed(2)}
								</p>
							</div>
							<div className="bg-[#d3d3d3] w-full h-12 sm:h-20 md:h-24 flex items-center justify-center text-gray-700 font-medium">
								<Image
									src="/icons/silver-medal.png"
									alt="Silver Medal"
									width={32}
									height={32}
									className="sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
								/>
							</div>
						</div>
					)}
					{/* Gold (1st place) - Center */}
					{gold && (
						<div className="flex flex-col items-center w-1/3">
							<div className="bg-gradient-to-b from-[#ffd700] to-[#e6b800] text-white font-bold text-base sm:text-xl md:text-2xl lg:text-3xl text-center py-3 sm:py-6 md:py-8 rounded-t-lg shadow-md h-32 sm:h-48 md:h-56 w-full border-2 border-yellow-300 flex flex-col justify-center">
								<p className="truncate px-1">
									{gold.player_name}
								</p>
								<p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4">
									{gold.average_placement.toFixed(2)}
								</p>
							</div>
							<div className="bg-[#ffeb3b] w-full h-16 sm:h-28 md:h-32 flex items-center justify-center text-gray-800 font-medium">
								<Image
									src="/icons/gold-medal.svg"
									alt="Gold Medal"
									width={40}
									height={40}
									className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
								/>
							</div>
						</div>
					)}
					{/* Bronze (3rd place) - Right */}
					{bronze && (
						<div className="flex flex-col items-center w-1/3">
							<div className="bg-gradient-to-b from-[#cd7f32] to-[#b87333] text-white font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-2 sm:py-4 md:py-6 rounded-t-lg shadow-md h-16 sm:h-24 md:h-32 w-full flex flex-col justify-center">
								<p className="truncate px-1">
									{bronze.player_name}
								</p>
								<p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-4">
									{bronze.average_placement.toFixed(2)}
								</p>
							</div>
							<div className="bg-[#e8b293] w-full h-10 sm:h-16 md:h-20 flex items-center justify-center text-gray-700 font-medium">
								<Image
									src="/icons/bronze-medal.png"
									alt="Bronze Medal"
									width={28}
									height={28}
									className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
								/>
							</div>
						</div>
					)}
				</div>
				<div className="max-w-4xl mx-auto mt-4 sm:mt-6">
					{averagePlacements.slice(3).map((player, index) => (
						<div
							key={player.player_name}
							className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-200 bg-white rounded-lg mb-2 shadow-sm"
						>
							<span className="text-base sm:text-lg font-medium text-gray-800 truncate pr-2">
								{index + 4}. {player.player_name}
							</span>
							<div className="text-right flex-shrink-0">
								<p className="text-sm sm:text-base text-gray-600">
									{player.average_placement.toFixed(2)}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				{pubquizGroups.map((group, index) => {
					return (
						<div
							key={index}
							className="mt-2 sm:mt-4 md:mt-8 bg-gradient-to-b from-[#fcfbfb] to-[#f5f5f5] max-w-4xl mx-auto p-3 sm:p-6 md:p-8 rounded-xl shadow-lg"
						>
							<h3 className="text-black">{group.pubquiz_name}</h3>
							{group.players.map((player, playerIndex) => (
								<div key={playerIndex} className="text-black">
									{player.player} - {player.placement}
								</div>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
}
