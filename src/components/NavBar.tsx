"use client";

import { Home, User, LogIn } from "lucide-react";
import Link from "next/link";

const navItems = [
	{ name: "Home", href: "/", icon: <Home size={20} /> },
	{ name: "Profile", href: "/profile", icon: <User size={20} /> },
	{ name: "Login", href: "/login", icon: <LogIn size={20} /> },
];

export default function NavBar() {
	return (
		<nav className="fixed left-0 top-0 h-screen w-56 bg-[--surface] text-[--foreground] shadow-md border-r border-[--border] p-4">
			<h1 className="text-xl font-bold mb-8">Gratis Bier bij Rilana</h1>
			<ul className="space-y-4">
				{navItems.map((item) => (
					<li key={item.name}>
						<Link
							href={item.href}
							className="flex items-center gap-3 text-sm hover:text-[--accent] transition-colors"
						>
							{item.icon}
							<span>{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
