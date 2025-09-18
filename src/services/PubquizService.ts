import { supabase } from "@/utils/supabase/client";
import { Champion } from "@/types/champion";

type RawChampion = { name: string; player: string };

function groupChampions(data: RawChampion[]): Champion[] {
	const map = new Map<string, string[]>();
	for (const { player, name } of data) {
		map.set(player, [...(map.get(player) ?? []), name]);
	}
	return Array.from(map, ([player_name, editions]) => ({
		player_name,
		editions,
	}));
}

export class PubquizService {
	async getAllChampions(): Promise<Champion[]> {
		const { data, error } = await supabase
			.from("pubquiz")
			.select("name, player")
			.eq("placement", 1);

		if (error) throw error;
		if (!data) return [];

		return groupChampions(data);
	}

	async getTopThreeChampions(): Promise<Champion[]> {
		const allChampions = await this.getAllChampions();

		const sorted = allChampions.sort(
			(a, b) => b.editions.length - a.editions.length
		);

		return sorted.slice(0, 3);
	}
}
