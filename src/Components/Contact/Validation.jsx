export default function Validation(values) {
	const errors = {};

	const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

	if (values.name === '') {
		errors.name = 'Name is Required!';
	}

	if (values.email === '') {
		errors.email = 'Email is Required!';
	} else if (!email_pattern.test(values.email)) {
		errors.email = 'Invalid Email';
	}

	return errors;
}
