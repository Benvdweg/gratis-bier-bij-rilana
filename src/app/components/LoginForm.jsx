"use client";
import { useState } from "react";
import { loginUser } from "@/lib/auth";
import { validateLogin } from "@/lib/validation";

export default function LoginForm({ onLoginSuccess, requiredRole }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		const { valid, errors } = validateLogin({ email, password });
		setEmailError(errors.email);
		setPasswordError(errors.password);

		if (!valid) return;

		setLoading(true);
		try {
			const result = await loginUser(email, password);

			if (requiredRole && result.role !== requiredRole) {
				throw new Error("role_error");
			}

			onLoginSuccess(result);
		} catch (error) {
			if (error.message === "role_error") {
				setError("Je hebt niet de juiste rechten.");
			} else {
				setError("Ongeldige inloggegevens.");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-8 p-6 bg-gray-900 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-6 text-center">Inloggen</h2>

			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block text-sm font-medium mb-2">
						Email
					</label>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-3 border border-gray-300 rounded-md"
					/>
					{emailError && (
						<p className="text-red-500 text-sm mt-1">
							{emailError}
						</p>
					)}
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
					/>
					{passwordError && (
						<p className="text-red-500 text-sm mt-1">
							{passwordError}
						</p>
					)}
				</div>

				{error && <p className="text-red-500 mt-4 mb-4">{error}</p>}

				<button
					type="submit"
					disabled={loading}
					className="w-full bg-blue-500 text-white p-3 rounded-md cursor-pointer hover:bg-blue-600 disabled:opacity-50"
				>
					{loading ? "Inloggen..." : "Login"}
				</button>
			</form>
		</div>
	);
}
