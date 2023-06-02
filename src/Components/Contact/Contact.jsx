import { useRef, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import emailjs from '@emailjs/browser';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import Validation from './Validation';

import Alert from '@mui/material/Alert';

const Contact = () => {
	const [statusMessage, setStatusMessage] = useState('');

	const [errors, setErrors] = useState({});

	const [values, setValues] = useState({
		name: '',
		email: '',
	});

	// const [open, setOpen] = useState(true);

	// const handleClose = (event, reason) => {
	// 	if (reason === 'clickaway') {
	// 		return;
	// 	}
	// 	setOpen(false);
	// };

	const form = useRef();

	const [send, setSend] = useState(false);
	const [isSubmiting, setIsSubmiting] = useState(false);

	function handleChange(e) {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		setErrors(Validation(values));
		setIsSubmiting(true);
	}

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmiting) {
			if (isSubmiting) {
				setSend(true);
			}
		}
	}, [errors]);

	const sendEmail = (e) => {
		e.preventDefault();

		console.log(values);
		if (send) {
			emailjs
				.sendForm(
					import.meta.env.VITE_API_EMAIL_SERVICE_KEY,
					import.meta.env.VITE_API_EMAIL_TEMPLATE_KEY,
					form.current,
					import.meta.env.VITE_API_EMAIL_USER_KEY
				)
				.then(
					(result) => {
						console.log(result.text);
						console.log('message sent');
						setStatusMessage(
							<Alert severity='success' variant='filled' sx={{ mt: 1 }}>
								Email sent successfully
							</Alert>
						);
					},
					(error) => {
						console.log(error.text);
						console.log('error');
						setStatusMessage(
							<Alert variant='filled' severity='error' sx={{ mt: 1 }}>
								Failure to send message
							</Alert>
						);
					}
				);
			e.target.reset();
		}
	};

	return (
		<div>
			<Navbar />
			<div className='contact_team'>
				<Typography variant='h4' sx={{ mt: 3 }}>
					Contact Us
				</Typography>
			</div>
			<div className='form_container'>
				<form ref={form} onSubmit={sendEmail} className='contact_form'>
					<div className='label_form'>
						<PersonIcon sx={{ height: 25, width: 25, mt: 0.5, mr: 0.5 }} />
						<Typography variant='h6' sx={{ mt: 0.2 }}>
							Name
						</Typography>
					</div>
					<input
						type='text'
						name='name'
						className='input_form'
						placeholder='type your name...'
						// id='name'
						onChange={handleChange}
						value={values.name}
					/>
					{errors.name && (
						<Alert variant='filled' severity='error' sx={{ mt: 0.9 }}>
							{errors.name}
						</Alert>
					)}
					<div className='label_form'>
						<EmailIcon sx={{ height: 25, width: 25, mt: 0.5, mr: 0.5 }} />
						<Typography variant='h6' sx={{ mt: 0.2 }}>
							Email
						</Typography>
					</div>
					<input
						type='email'
						name='email'
						className='input_form'
						placeholder='type your email...'
						// id='email'
						onChange={handleChange}
						value={values.email}
					/>
					{errors.email && (
						<Alert variant='filled' severity='error' sx={{ mt: 0.9 }}>
							{errors.email}
						</Alert>
					)}
					<div className='label_form'>
						<MessageIcon sx={{ height: 25, width: 25, mt: 0.5, mr: 0.5 }} />
						<Typography variant='h6' sx={{ mb: 0.2 }}>
							Message
						</Typography>
					</div>

					<textarea name='message' className='text_area_form' maxLength='200' />
					<input type='submit' value='Send' className='input_text' />
				</form>
				<div className='status'>{statusMessage}</div>
			</div>
		</div>
	);
};

export default Contact;
