import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import axios from 'axios';

function SignIn(props) {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		axios.post('http://localhost:8000/users').then((res) => {
			console.log(res);
			navigate('/toolcard');
		});
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
							value={user.email}
							onChange={(event) =>
								setUser({ ...user, email: event.target.value })
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
							value={user.password}
							onChange={(event) =>
								setUser({ ...user, password: event.target.value })
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
