"use client";

import { DnaIcon, Home } from "lucide-react";
import { useState } from "react";
import NavItem from "./NavItem";
import HamburgerToggle from "./HamburgerToggle";

const navItems = [
	{ name: "Home", href: "/", icon: <Home size={20} /> },
	{ name: "Pubquiz", href: "/", icon: <DnaIcon size={20} /> },
];

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleBackdropClick = () => {
		if (isOpen) {
			setIsOpen(false);
		}
	};

	const handleNavItemClick = () => {
		if (isOpen) {
			setIsOpen(false);
		}
	};

	return (
		<>
			<HamburgerToggle
				isOpen={isOpen}
				onClick={() => setIsOpen(!isOpen)}
			/>

			{isOpen && (
				<div
					className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 ease-in-out"
					onClick={handleBackdropClick}
				/>
			)}

			<nav
				className={`
					fixed top-0 left-0 h-screen w-64 bg-[#2a2a3d] shadow-xl
					transform transition-transform duration-300 ease-in-out
					${isOpen ? "translate-x-0" : "-translate-x-full"} 
					md:translate-x-0 md:static md:flex-shrink-0
					overflow-y-auto flex flex-col z-40
				`}
			>
				<h1 className="text-2xl font-bold text-center my-8">
					Gratis Bier bij Rilana
				</h1>
				<ul className="space-y-4 px-4">
					{navItems.map((item) => (
						<NavItem
							key={item.name}
							item={item}
							onItemClick={handleNavItemClick}
						/>
					))}
				</ul>
				<div className="p-4 border-t border-gray-600/30 mt-auto">
					<div className="text-xs text-gray-400 text-center">
						🍺 Cheers to good times!
					</div>
				</div>
			</nav>
		</>
	);
}
