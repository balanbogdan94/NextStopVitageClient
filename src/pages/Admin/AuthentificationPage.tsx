import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuthorization } from '../../context/AuthorizationContext';
import WrongCredentialsException from '../../exceptions/wrongCredentialsException';
import './AuthentificationPage.scss';

const AuthentificationPage = () => {
	const [user, setUser] = useState();
	const [pass, setPass] = useState();
	const [errorMessage, setErrorMessage] = useState<string>('');
	const { logIn } = useAuthorization();
	const history = useHistory();

	async function logInUser(e) {
		e.preventDefault();
		if (logIn) {
			try {
				await logIn(user, pass);
				history.push('/admin');
			} catch (error) {
				if (error instanceof WrongCredentialsException) {
					setErrorMessage(error.message);
				} else {
					throw error;
				}
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
		<div className="authentification-container">
			<img
				className="authentification-container__logo"
				src="/images/logo.png"
				alt="logo"
			/>
			<form className="authentification-container__form" onSubmit={logInUser}>
				<section
					className="authentification-container__form__error"
					style={{
						display: errorMessage ? 'block' : 'none',
					}}
				>
					<p>{errorMessage}</p>
				</section>
				<label>
					Username:
					<input
						className="authentification-container__form__input"
						type="email"
						onChange={onEmailChanged}
					/>
				</label>
				<label>
					Password:
					<input
						className="authentification-container__form__input"
						minLength={6}
						type="password"
						onChange={onPassChanged}
					/>
				</label>
				<input
					className="authentification-container__form__submit"
					type="submit"
				/>
			</form>
		</div>
	);
};

export default AuthentificationPage;
