import { supabase } from "./supabaseClient";

// Login user with email and password
export async function loginUser(email, password) {
	try {
		const { data: user, error: signInError } =
			await supabase.auth.signInWithPassword({
				email,
				password,
			});

		if (signInError) {
			console.error("Sign-in error:", signInError);
			throw signInError;
		}

		return user;
	} catch (error) {
		console.error("loginUser failed:", error);
		throw error;
	}
}

// Logout user
export async function logoutUser() {
	const { error } = await supabase.auth.signOut();
	if (error) throw error;
}
