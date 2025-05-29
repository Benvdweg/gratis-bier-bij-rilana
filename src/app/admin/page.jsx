"use client";
import { useState } from "react";
import LoginForm from "@/app/components/LoginForm";

export default function Admin() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	const handleLoginSuccess = (result) => {
		setUserInfo(result);
		setIsLoggedIn(true);
		console.log("Login successful:", result);
	};

	if (!isLoggedIn) {
		return (
			<>
				<div className="flex justify-center pt-16">
					<h1 className="font-bold text-5xl mb-8">
						Gratis Bier bij Admin
					</h1>
				</div>
				<LoginForm
					onLoginSuccess={handleLoginSuccess}
					requiredRole="admin"
				/>
			</>
		);
	}

	return (
		<div>
			<h1>Admin Panel</h1>
			<div>
				<button>Add Beer Stats</button>
				<button>Manage Users</button>
			</div>
		</div>
	);
}
