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
			<div className="flex flex-col items-center pt-16">
				<h1 className="font-bold text-5xl mb-8">
					Gratis Bier bij Rilana
				</h1>
				<div className="bg-green-100 p-4 rounded-lg">
					<p className="text-green-800">
						Welcome back, {userInfo?.user.email}!
					</p>
					<p className="text-green-600">Role: {userInfo?.role}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center pt-16">
			<h1 className="font-bold text-5xl mb-8">Gratis Bier bij Rilana</h1>
			<LoginForm onLoginSuccess={handleLoginSuccess} />
		</div>
	);
}
