"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			setError(error.message);
		} else {
			router.push("/");
		}
	};

	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
			<form
				onSubmit={handleLogin}
				className="w-full max-w-sm p-6 rounded-lg shadow bg-[#2a2a3d]"
			>
				<h1 className="text-2xl font-bold mb-4">Inloggen</h1>
				<input
					className="w-full mb-2 px-3 py-2 border rounded"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="w-full mb-4 px-3 py-2 border rounded"
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{error && <p className="text-red-500 text-sm mb-2">{error}</p>}
				<button
					type="submit"
					className="w-full bg-indigo-600 py-2 px-4 rounded hover:bg-indigo-700 cursor-pointer"
				>
					Inloggen
				</button>
			</form>
		</main>
	);
}
