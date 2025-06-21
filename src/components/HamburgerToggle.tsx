"use client";

interface HamburgerToggleProps {
	isOpen: boolean;
	onClick: () => void;
}

export default function HamburgerToggle({
	isOpen,
	onClick,
}: HamburgerToggleProps) {
	return (
		<button
			className="md:hidden fixed top-4 right-4 z-50 p-3 bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
			onClick={onClick}
			aria-label="Toggle menu"
		>
			<div className="w-6 h-6 flex flex-col justify-center items-center">
				<span
					className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
						isOpen
							? "rotate-45 translate-y-1.5"
							: "rotate-0 translate-y-0"
					}`}
				/>
				<span
					className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out my-1 ${
						isOpen ? "opacity-0" : "opacity-100"
					}`}
				/>
				<span
					className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
						isOpen
							? "-rotate-45 -translate-y-1.5"
							: "rotate-0 translate-y-0"
					}`}
				/>
			</div>
		</button>
	);
}
