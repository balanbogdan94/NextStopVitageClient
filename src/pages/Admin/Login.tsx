import React, { useState } from 'react';
import { useAuthorization } from '../../context/AuthorizationContext';

const Login = () => {
	const [user, setUser] = useState();
	const [pass, setPass] = useState();
	const { logIn } = useAuthorization();

	async function logInUser(e) {
		e.preventDefault();
		await logIn(user, pass);
	}

	function onEmailChanged(e) {
		e.preventDefault();
		setUser(e.target.value);
	}

	function onPassChanged(e) {
		e.preventDefault();
		setPass(e.target.value);
	}

	return (
		<div>
			<img src="/images/logo.png" alt="logo" />
			<form onSubmit={logInUser}>
				<input type="email" onChange={onEmailChanged} />
				<input type="password" onChange={onPassChanged} />
				<input type="submit" />
			</form>
		</div>
	);
};

export default Login;
