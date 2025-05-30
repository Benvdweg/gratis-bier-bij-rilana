"use client";

import LogoutButton from "./components/LogoutButton";

export default function Admin() {
	return (
		<div>
			<h1>Admin Panel</h1>
			<div>
				<button>Add Beer Stats</button>
				<button>Manage Users</button>
			</div>
			<LogoutButton></LogoutButton>
		</div>
	);
}
