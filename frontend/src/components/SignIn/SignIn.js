import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn(props) {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	// GET request to match email/pw with DB, hash pw before sending?
	// Do i need to store the token in a new var if thats what the db will return?
	// Or how can I redirect the page to /toolcard when the login is successful?
	// Unsuccessful logins should be caught with custom_errors --- not sure how to display these errors, are they console.logs?

	function handleSubmit(event) {
		event.preventDefault();
		// axios
		// 	.get(`https://cryptic-dusk-16798.herokuapp.com/listing/${id}`, user)
		// 	.then((res) => {
		// 		console.log(res);
		navigate('/toolcard');
		// 	});

		// console.log(user);
	}

	return (
		<main className='login-form'>
			<form onSubmit={handleSubmit}>
				<ul className='login-ul'>
					<li className='login-li'>
						<label className='form-label' htmlFor='user'>
							Email:
						</label>
						<input
							className='login-input'
							id='email'
							type='email'
							onChange={(event) =>
								setUser({ ...user, user: event.target.value })
							}></input>
					</li>
					<li className='login-li'>
						<label className='form-label' htmlFor='password'>
							Password:
						</label>
						<input
							className='login-input'
							id='password'
							type='password'
							onChange={(event) =>
								setPassword({ ...password, password: event.target.value })
							}></input>
					</li>
					<li className='login-li'>
						<button className='login-button' type='submit'>
							Log In
						</button>
					</li>
				</ul>
			</form>
			<Link to='/signup' className='links'>
				<button className='sign-up-button'>Sign Up</button>
			</Link>
		</main>
	);
}

export default SignIn;
