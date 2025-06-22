import { Champion } from "@/types/Champion";
import { supabase } from "@/utils/supabase/client";

export class PubquizService {
	async fetchChampions(): Promise<Champion[]> {
		try {
			const { data, error } = await supabase
				.from("champions")
				.select("*")
				.order("created_at", { ascending: false });

			if (error) throw error;
			return data || [];
		} catch (error) {
			console.error("Error fetching champions:", error);
			throw error;
		}
	}
}
