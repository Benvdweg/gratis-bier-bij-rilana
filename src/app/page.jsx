"use client";
import { useAuth } from "./contexts/AuthContext";

export default function Home() {
	return (
		<>
			<div className="flex justify-center pt-16">
				<h1 className="font-bold text-5xl mb-8">
					Gratis Bier bij Rilana
				</h1>
			</div>
			<div className="p-4 rounded-lg text-center">
				<p>Welcome back</p>
			</div>
		</>
	);
}
