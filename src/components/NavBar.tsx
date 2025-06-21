"use client";

import { DnaIcon, Home, User } from "lucide-react";
import NavItem from "./NavItem";

const navItems = [
	{ name: "Home", href: "/", icon: <Home size={20} /> },
	{ name: "Pubquiz", href: "/", icon: <DnaIcon size={20} /> },
];

export default function NavBar() {
	return (
		<nav className="w-64 h-screen flex-shrink-0 flex flex-col shadow-xl overflow-y-auto bg-[#2a2a3d]">
			<h1 className="text-2xl font-bold text-center my-8">
				Gratis Bier bij Rilana
			</h1>
			<ul className="space-y-4">
				{navItems.map((item) => (
					<NavItem key={item.name} item={item} />
				))}
			</ul>
		</nav>
	);
}
