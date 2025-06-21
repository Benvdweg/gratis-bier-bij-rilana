import Link from "next/link";

interface NavItemProps {
	item: {
		name: string;
		href: string;
		icon: React.ReactNode;
	};
	onItemClick?: () => void;
}

export default function NavItem({ item, onItemClick }: NavItemProps) {
	return (
		<li className="px-4 py-2">
			<Link
				href={item.href}
				onClick={onItemClick}
				className="flex items-center gap-3 transition-colors bg-slate-500 hover:bg-slate-600 rounded-lg border-indigo-800 py-4 px-3"
			>
				{item.icon}
				<span>{item.name}</span>
			</Link>
		</li>
	);
}
