import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import AppWrapper from "@/components/AppWrapper";

const inter = Inter({
	variable: "--font-fredoka",
	weight: ["400", "600"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Gratis Bier bij Rilana",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>
				<div className="min-h-screen">
					<AppWrapper>{children}</AppWrapper>
				</div>
			</body>
		</html>
	);
}
