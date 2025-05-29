import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBEs_dokP-UzFGqZ47ALhVR6pVMgPz0L1Y",
	authDomain: "gratis-bier-bij-rilana.firebaseapp.com",
	projectId: "gratis-bier-bij-rilana",
	storageBucket: "gratis-bier-bij-rilana.firebasestorage.app",
	messagingSenderId: "221759492704",
	appId: "1:221759492704:web:9a03f60d475c620b8fa905",
	measurementId: "G-EH34SK5RL9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
