import { useState } from 'react';
import './signUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp(props) {
	// POST REQUEST TO MONGO
	// send email and password to mongo
	// mongo will store email and hash password

	const [newUser, setNewUser] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		// axios
		// 	.post('http://localhost:8000/signup/', {
		// 		email: newUser.email,
		// 		password: newUser.password,
		// 	})
		// 	.then((res) => {
		// 		console.log(res);
		// 		navigate('/signin');
		// 	});
		// console.log(newUser);
		fetch('http://localhost:8000/signup/', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((res) => {
				navigate('/signin');
				console.log(res);
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
		<main className='sign-up-form'>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<br />
				<div class='tooly-header'>
					<span>t</span>
					<span>o</span>
					<span>o</span>
					<span>l</span>
					<span>y</span>
					<span>🔨</span>
				</div>
				<ul className='sign-up-form-ul'>
					<li className='sign-up-form-li'>
						<label className='sign-up-form-label' htmlFor='new-user'>
							Email:
						</label>
						<input
							className='sign-up-form-input'
							id='email'
							type='email'
							value={newUser.email}
							onChange={(event) =>
								setNewUser({ ...newUser, email: event.target.value })
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
							value={newUser.password}
							onChange={(event) =>
								setNewUser({
									...newUser,
									password: event.target.value,
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
					<h4 style={{ color: 'gray' }}>find tools to rent close to home!</h4>
					<br />
				</ul>
			</form>
		</main>
	);
}

export default SignUp;
