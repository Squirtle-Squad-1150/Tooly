import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import axios from 'axios';

function SignIn(props) {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [token, setToken] = useState('');

	const navigate = useNavigate();

	function handleSubmit(event) {
		// event.preventDefault();
		axios.post('http://localhost:8000/signin').then((res) => {
			console.log(res);
			navigate('/toolcard');
		});
	}

	const spans = document.querySelectorAll('.tooly-header span');

	spans.forEach((span, idx) => {
		span.addEventListener('click', (e) => {
			e.target.classList.add('active');
		});
		span.addEventListener('animationend', (e) => {
			e.target.classList.remove('active');
		});

		// Initial animation
		setTimeout(() => {
			span.classList.add('active');
		}, 750 * (idx + 1));
	});

	return (
		<main className='login-form'>
			<br />
			<div class='tooly-header'>
				<span>t</span>
				<span>o</span>
				<span>o</span>
				<span>l</span>
				<span>y</span>
				<span>🔨</span>
			</div>
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
						<Link to='/signup' className='links'>
							<button className='sign-up-button'>Sign Up</button>
						</Link>
					</li>
					<h4 style={{ color: 'gray' }}>find tools to rent close to home!</h4>
					<br />
				</ul>
			</form>
		</main>
	);
}

export default SignIn;
