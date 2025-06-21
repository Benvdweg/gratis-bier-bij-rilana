import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
	item: {
		name: string;
		href: string;
		icon: React.ReactNode;
	};
	onItemClick?: () => void;
}

export default function NavItem({ item, onItemClick }: NavItemProps) {
	const pathname = usePathname();
	const isActive = pathname === item.href;

	return (
		<li>
			<Link
				href={item.href}
				onClick={onItemClick}
				className={`flex items-center rounded gap-3 p-3 ${
					isActive ? "bg-slate-600" : "hover:bg-slate-600"
				}`}
			>
				{item.icon}
				<span>{item.name}</span>
			</Link>
		</li>
	);
}
