"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

// Create context with default values
const AuthContext = createContext({
	user: null,
	loading: true,
	signIn: async () => {},
	signOut: async () => {},
	isAuthenticated: false,
});

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within AuthProvider");
	}
	return context;
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Get initial session
		const getInitialSession = async () => {
			try {
				const {
					data: { session },
					error,
				} = await supabase.auth.getSession();

				if (error) {
					console.error("Error getting session:", error);
				} else {
					setUser(session?.user ?? null);
				}
			} catch (error) {
				console.error("Error in getInitialSession:", error);
			} finally {
				setLoading(false);
			}
		};

		getInitialSession();

		// Listen for auth changes
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(async (event, session) => {
			setUser(session?.user ?? null);
			setLoading(false);
		});

		return () => subscription.unsubscribe();
	}, []);

	const signIn = async (email, password) => {
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});
			if (error) throw error;
			return data;
		} catch (error) {
			console.error("Sign in error:", error);
			throw error;
		}
	};

	const signOut = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			console.error("Sign out error:", error);
			throw error;
		}
	};

	const value = {
		user,
		loading,
		signIn,
		signOut,
		isAuthenticated: !!user,
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};
