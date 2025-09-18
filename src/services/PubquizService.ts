import { supabase } from "@/utils/supabase/client";

export class PubquizService {
	async getPlayerAverages(): Promise<
		Array<{
			player_name: string;
			average_placement: number;
			total_quizzes: number;
		}>
	> {
		const { data, error } = await supabase
			.from("pubquiz")
			.select("player, placement");

		if (error) throw error;
		if (!data) return [];

		// Group by player and calculate averages
		const playerStats = new Map<string, number[]>();

		for (const record of data) {
			const placements = playerStats.get(record.player) || [];
			placements.push(record.placement);
			playerStats.set(record.player, placements);
		}

		// Calculate averages
		return Array.from(playerStats, ([player_name, placements]) => ({
			player_name,
			average_placement:
				placements.reduce((sum, p) => sum + p, 0) / placements.length,
			total_quizzes: placements.length,
		}));
	}

	async getTopThreeByAverage(): Promise<
		Array<{
			player_name: string;
			average_placement: number;
			total_quizzes: number;
		}>
	> {
		const playerAverages = await this.getPlayerAverages();

		const sorted = playerAverages.sort(
			(a, b) => a.average_placement - b.average_placement
		);

		return sorted.slice(0, 3);
	}
}
