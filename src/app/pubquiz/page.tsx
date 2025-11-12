"use client";

import HallOfFame from "./components/HallOfFame";
import PubquizResults from "./components/PubquizResults";

export default function PubquizPage() {
	return (
		<div className="px-3 sm:px-4 lg:px-0 mb-8">
			<HallOfFame />
			<PubquizResults />
		</div>
	);
}
