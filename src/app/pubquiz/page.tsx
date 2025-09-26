"use client";

import { useEffect, useState } from "react";
import { PubquizGroup, PubquizService } from "@/services/PubquizService";
import { LoadingCard } from "./components/LoadingCard";
import HallOfFame from "./components/HallOfFame";

const pubquizService = new PubquizService();

export default function PubquizPage() {
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

	if (loading) {
		return <LoadingCard />;
	}

	return (
		<div className="px-3 sm:px-4 lg:px-0">
			<HallOfFame />
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
