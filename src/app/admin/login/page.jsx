"use client";
import LoginForm from "@/app/components/LoginForm";

export default function AdminLoginPage() {
	return (
		<>
			<h1 className="flex justify-center pt-16 font-bold text-5xl mb-16">
				Admin Login
			</h1>
			<LoginForm />
		</>
	);
}
