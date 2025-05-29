import { auth, db } from "./src/lib/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

async function seedAdmin() {
	try {
		const adminEmail = "gebruiker@gmail.com";
		const adminpassword = "Rilana123!";

		const userCredential = await createUserWithEmailAndPassword(
			auth,
			adminEmail,
			adminpassword
		);
		const user = userCredential.user;

		await setDoc(doc(db, "users", user.uid), {
			email: adminEmail,
			role: "user",
			createdAt: new Date(),
			displayName: "Gebruiker",
		});

		console.log("Admin user created successfully:", user.uid);
		process.exit(0);
	} catch (error) {
		console.error("Error creating admin user:", error);
		process.exit(1);
	}
}

seedAdmin();
