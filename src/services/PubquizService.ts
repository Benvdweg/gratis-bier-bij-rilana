import { supabase } from "@/utils/supabase/client";

interface PlayerStats {
	player_name: string;
	average_placement: number;
	total_quizzes: number;
}

export class PubquizService {
	async getPlayerAverages(): Promise<PlayerStats[]> {
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

		const averageStats = Array.from(
			playerStats,
			([player_name, placements]) => ({
				player_name,
				average_placement:
					placements.reduce((sum, p) => sum + p, 0) /
					placements.length,
				total_quizzes: placements.length,
			})
		);

		return averageStats.sort(
			(a, b) => a.average_placement - b.average_placement
		);
	}

	async getTopThreeByAverage(): Promise<PlayerStats[]> {
		const playerAverages = await this.getPlayerAverages();
		return playerAverages.slice(0, 3);
	}
}
