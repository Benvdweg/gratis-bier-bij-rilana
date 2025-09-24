import { supabase } from "@/utils/supabase/client";

interface PlayerStats {
	player_name: string;
	average_placement: number;
	total_quizzes: number;
}

interface PubquizRecord {
	name: string;
	player: string;
	placement: number;
}

export interface PubquizGroup {
	pubquiz_name: string;
	players: {
		player: string;
		placement: number;
	}[];
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

	async getPlacementsPerSeason(): Promise<PubquizGroup[]> {
		const { data, error } = await supabase
			.from("pubquiz")
			.select("name, player, placement");

		if (error) throw error;
		if (!data) return [];

		const groupMap = data.reduce<Record<string, PubquizGroup>>(
			(acc, row: PubquizRecord) => {
				if (!acc[row.name]) {
					acc[row.name] = {
						pubquiz_name: row.name,
						players: [],
					};
				}
				acc[row.name].players.push({
					player: row.player,
					placement: row.placement,
				});
				return acc;
			},
			{}
		);

		return Object.values(groupMap);
	}
}
