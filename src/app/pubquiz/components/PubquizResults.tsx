"use client";

import { useEffect, useState } from "react";
import { PubquizGroup, PubquizService } from "@/services/PubquizService";
import { LoadingCard } from "./LoadingCard";

const pubquizService = new PubquizService();

const getOrdinal = (num: number): string => {
	const suffixes = ["th", "st", "nd", "rd"];
	const value = num % 100;
	return (
		num + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0])
	);
};

export default function PubquizResults() {
	const [pubquizGroups, setPubquizGroups] = useState<PubquizGroup[]>([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchAveragePlacements() {
			try {
				const pubquizGroupsData =
					await pubquizService.getPlacementsPerSeason();
				setPubquizGroups(pubquizGroupsData);
			} catch (error) {
				console.error("Error fetching top three:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchAveragePlacements();
	}, []);

	if (loading) return <LoadingCard />;

	<div>
		{pubquizGroups.map((group, index) => {
			return (
				<div
					key={index}
					className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 bg-gradient-to-b from-[#fcfbfb] to-[#f5f5f5] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
				>
					<h3 className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 drop-shadow-sm">
						{group.pubquiz_name}
					</h3>
					<div className="space-y-2 sm:space-y-3">
						{group.players.map((player, playerIndex) => (
							<div
								key={playerIndex}
								className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
							>
								<span className="text-base sm:text-lg font-medium text-gray-800 truncate pr-2">
									<span className="font-bold text-gray-900">
										{getOrdinal(player.placement)}.
									</span>{" "}
									{player.player}
								</span>
							</div>
						))}
					</div>
				</div>
			);
		})}
	</div>;
}
