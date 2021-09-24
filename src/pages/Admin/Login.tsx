import React, { useState } from 'react';
import { User } from './../../model/user';
import { signIn } from './../../firebase/api/authorization';
import WrongCredentialsException from '../../exceptions/wrongCredentialsException';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const [user, setUser] = useState();
	const [pass, setPass] = useState();
    const history = useHistory();

	async function logInUser(e) {
		e.preventDefault();
        try{
            const loggedUser: User = await signIn(user, pass);
            history.push("/admin")
        } catch (error){
            if(error instanceof WrongCredentialsException){
                alert(error.message)
            } else {
                console.log(error)
            }

        }
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
