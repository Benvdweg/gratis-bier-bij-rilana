"use client";
import { useAuth } from "./contexts/AuthContext";

export default function Home() {
	const { user, signOut } = useAuth();

	const handleLogout = async () => {
		try {
			await signOut();
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	return (
		<>
			<div className="flex justify-center pt-16">
				<h1 className="font-bold text-5xl mb-8">
					Gratis Bier bij Rilana
				</h1>
			</div>
			<div className="p-4 rounded-lg text-center">
				<p>Welcome back, {user?.email}!</p>
				<button
					onClick={handleLogout}
					className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
				>
					Logout
				</button>
			</div>
		</>
	);
}
