"use client";
import { useState } from "react";
import { loginUser } from "@/lib/auth";

export default function LoginForm({ onLoginSuccess }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const result = await loginUser(email, password);
			onLoginSuccess(result);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block text-sm font-medium mb-2">
						Email
					</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-3 border border-gray-300 rounded-md"
						required
					/>
				</div>

				<div className="mb-6">
					<label className="block text-sm font-medium mb-2">
						Password
					</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-3 border border-gray-300 rounded-md"
						required
					/>
				</div>

				{error && (
					<div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
						{error}
					</div>
				)}

				<button
					type="submit"
					disabled={loading}
					className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 disabled:opacity-50"
				>
					{loading ? "Logging in..." : "Login"}
				</button>
			</form>
		</div>
	);
}
