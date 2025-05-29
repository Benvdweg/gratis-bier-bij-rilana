// components/AuthGuard.js
"use client";
import { useAuth } from "@/app/contexts/AuthContext";
import LoginForm from "./LoginForm";

export default function AuthGuard({ children }) {
	const { loading, isAuthenticated } = useAuth();

	if (loading) {
		return (
			<div className="flex justify-center pt-16">
				<div>Loading...</div>
			</div>
		);
	}

	if (!isAuthenticated) {
		return (
			<>
				<div className="flex justify-center pt-16">
					<h1 className="font-bold text-5xl mb-8">
						Gratis Bier bij Rilana
					</h1>
				</div>
				<LoginForm />
			</>
		);
	}

	return children;
}
