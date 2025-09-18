"use client";

import { useEffect, useState } from "react";
import { PubquizService } from "@/services/PubquizService";
import Image from "next/image";

const pubquizService = new PubquizService();
const PAGE_TITLE = "🏆 Hall of Fame 🏆";

export default function PubquizPage() {
	const [topThree, setTopThree] = useState<
		Array<{
			player_name: string;
			average_placement: number;
			total_quizzes: number;
		}>
	>([]);
	const [loading, setLoading] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		async function fetchTopThree() {
			try {
				const topThreeData =
					await pubquizService.getTopThreeByAverage();
				setTopThree(topThreeData);
				console.log("Top three by average loaded:", topThreeData);
			} catch (error) {
				console.error("Error fetching top three:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchTopThree();
	}, []);

	if (!mounted) {
		return (
			<div className="px-4 sm:px-0">
				<div className="mt-8 sm:mt-16 md:mt-32 bg-[#fcfbfb] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
					<h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6">
						{PAGE_TITLE}
					</h1>
					<div className="flex justify-center items-center h-64 text-gray-600">
						Loading...
					</div>
				</div>
			</div>
		);
	}

	if (loading) {
		return (
			<div className="px-4 sm:px-0">
				<div className="mt-8 sm:mt-16 md:mt-32 bg-[#fcfbfb] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
					<h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6">
						{PAGE_TITLE}
					</h1>
					<div className="flex justify-center items-center h-64 text-gray-600">
						Loading...
					</div>
				</div>
			</div>
		);
	}

	// Assign podium positions: gold (1st, center), silver (2nd, left), bronze (3rd, right)
	const gold = topThree[0];
	const silver = topThree[1];
	const bronze = topThree[2];

	return (
		<div className="px-4 sm:px-0">
			<div className="mt-8 sm:mt-16 md:mt-32 bg-gradient-to-b from-[#fcfbfb] to-[#f5f5f5] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
				<h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 drop-shadow-md">
					{PAGE_TITLE}
				</h1>
				<div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8">
					{/* Silver (2nd place) - Left */}
					{silver && (
						<div className="flex flex-col items-center w-1/3">
							<div className="bg-gradient-to-b from-[#c0c0c0] to-[#a8a8a8] text-white font-semibold text-lg sm:text-xl md:text-2xl text-center py-4 sm:py-6 rounded-t-lg shadow-md h-32 sm:h-40 w-full">
								<p>{silver.player_name}</p>
								<p>{silver.average_placement.toFixed(2)}</p>
							</div>
							<div className="bg-[#d3d3d3] w-full h-20 sm:h-24 flex items-center justify-center text-gray-700 font-medium text-sm sm:text-base">
								<Image
									src="/icons/silver-medal.png"
									alt="Silver Medal"
									width={78}
									height={78}
								/>
							</div>
						</div>
					)}
					{/* Gold (1st place) - Center */}
					{gold && (
						<div className="flex flex-col items-center w-1/3">
							<div className="bg-gradient-to-b from-[#ffd700] to-[#e6b800] text-white font-bold text-xl sm:text-2xl md:text-3xl text-center py-6 sm:py-8 rounded-t-lg shadow-md h-48 sm:h-56 w-full border-2 border-yellow-300">
								<p>{gold.player_name}</p>
								<p>{gold.average_placement.toFixed(2)}</p>
							</div>
							<div className="bg-[#ffeb3b] w-full h-28 sm:h-32 flex items-center justify-center text-gray-800 font-medium text-base sm:text-lg">
								<Image
									src="/icons/gold-medal.svg"
									alt="Gold Medal"
									width={96}
									height={96}
								/>
							</div>
						</div>
					)}
					{/* Bronze (3rd place) - Right */}
					{bronze && (
						<div className="flex flex-col items-center w-1/3">
							<div className="bg-gradient-to-b from-[#cd7f32] to-[#b87333] text-white font-semibold text-lg sm:text-xl md:text-2xl text-center py-4 sm:py-6 rounded-t-lg shadow-md h-24 sm:h-32 w-full">
								<p>{bronze.player_name}</p>
								<p>{bronze.average_placement.toFixed(2)}</p>
							</div>
							<div className="bg-[#e8b293] w-full h-16 sm:h-20 flex items-center justify-center text-gray-700 font-medium text-sm sm:text-base">
								<Image
									src="/icons/bronze-medal.png"
									alt="Bronze Medal"
									width={64}
									height={64}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
