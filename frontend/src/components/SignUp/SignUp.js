import { useState } from 'react';
import './signUp.css';
import { Link } from 'react-router-dom';

function SignUp(props) {
	// POST REQUEST TO MONGO
	// send email and password to mongo
	// mongo will store email and hash password

	const [newUser, setNewUser] = useState('');
	const [newPassword, setNewPassword] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		// axios
		// 	.post(`https://cryptic-dusk-16798.herokuapp.com/listing/${id}`, user)
		// 	.then((res) => {
		// 		console.log(res);
		// 		navigate('/');
		// 	});

		// console.log(user);
	}

	return (
		<main className='sign-up-form'>
			<form onSubmit={{ handleSubmit }}>
				<ul className='sign-up-form-ul'>
					<li className='sign-up-form-li'>
						<label className='sign-up-form-label' htmlFor='new-user'>
							Email:
						</label>
						<input
							className='sign-up-form-input'
							id='email'
							type='email'
							onChange={(event) =>
								setNewUser({ ...newUser, newUser: event.target.value })
							}></input>
					</li>
					<li className='sign-up-form-li'>
						<label className='sign-up-form-label' htmlFor='new-password'>
							Password:
						</label>
						<input
							className='sign-up-form-input'
							id='password'
							type='password'
							onChange={(event) =>
								setNewPassword({
									...newPassword,
									newPassword: event.target.value,
								})
							}></input>
					</li>
					<li className='sign-up-form-li'>
						<Link to='/toolcard' className='links'>
							<button className='sign-up-form-button' type='submit'>
								Complete Sign-Up
							</button>
						</Link>
					</li>
				</ul>
			</form>
		</main>
	);
}

export default SignUp;
