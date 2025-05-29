import { auth, db } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export async function loginUser(email, password) {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = userCredential.user;

		const userDoc = await getDoc(doc(db, "users", user.uid));
		const userData = userDoc.data();

		return {
			user,
			role: userData?.role || "user",
		};
	} catch (error) {
		throw error;
	}
}

export async function logoutUser() {
	try {
		await signOut(auth);
	} catch (error) {
		throw error;
	}
}

export async function getCurrentUserRole(uid) {
	try {
		const userDoc = await getDoc(doc(db, "users", uid));
		return userDoc.data()?.role || "user";
	} catch (error) {
		console.error("Error getting user role:", error);
		return "user";
	}
}
