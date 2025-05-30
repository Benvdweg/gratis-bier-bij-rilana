"use client";

import LogoutButton from "./components/LogoutButton";

export default function Admin() {
	return (
		<div className="text-center pt-36 text-4xl space-y-24">
			<h1>Admin Panel</h1>
			<LogoutButton></LogoutButton>
		</div>
	);
}
