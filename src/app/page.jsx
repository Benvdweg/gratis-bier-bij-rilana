"use client";
import { useState } from "react";
import LoginForm from "./components/LoginForm";

export default function Home() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	const handleLoginSuccess = (result) => {
		setUserInfo(result);
		setIsLoggedIn(true);
		console.log("Login successful:", result);
	};

	if (isLoggedIn) {
		return (
			<>
				<div className="flex justify-center pt-16">
					<h1 className="font-bold text-5xl mb-8">
						Gratis Bier bij Rilana
					</h1>
				</div>
				<div className="p-4 rounded-lg text-center">
					<p>Welcome back, {userInfo?.user.email}!</p>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="flex justify-center pt-16">
				<h1 className="font-bold text-5xl mb-8">
					Gratis Bier bij Rilana
				</h1>
			</div>
			<LoginForm onLoginSuccess={handleLoginSuccess} />
		</>
	);
}
