"use client";
import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
	const { signOut } = useAuth();
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await signOut();
			router.push("/admin/login");
		} catch (error) {
			console.error("Logout error:", error);
		}
	};

	return (
		<button
			onClick={handleLogout}
			className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
		>
			Uitloggen
		</button>
	);
}
