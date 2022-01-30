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
		axios.post('http://localhost:8000/signup/').then((res) => {
			console.log(res);
			navigate('/signin');
		});
		console.log(newUser);
	}

	return (
		<main className='sign-up-form'>
			<form className='sign-up-form' onSubmit={handleSubmit}>
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
				</ul>
			</form>
		</main>
	);
}

export default SignUp;
