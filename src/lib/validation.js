export function validateLogin({ email, password }) {
	const errors = { email: "", password: "" };
	let valid = true;

	if (!email) {
		errors.email = "Email is verplicht.";
		valid = false;
	} else {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			errors.email = "Vul een geldig e-mailadres in.";
			valid = false;
		}
	}

	if (!password) {
		errors.password = "Wachtwoord is verplicht.";
		valid = false;
	}

	return { valid, errors };
}
