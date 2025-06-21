"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/components/NavBar";

export default function AppWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const noNavbarRoutes = ["/login", "/register"];

	const showNavbar = !noNavbarRoutes.includes(pathname);

	return (
		<div className="flex h-screen overflow-hidden">
			{showNavbar && <Navbar />}
			<main className="flex-grow overflow-y-auto">{children}</main>
		</div>
	);
}
