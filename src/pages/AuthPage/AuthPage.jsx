import React from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
	return (
		<main>
			<br />
			<h1>Login or Sign Up to Start!</h1>
			<SignUpForm setUser={setUser} />
			<LoginForm setUser={setUser} />
		</main>
	);
}
