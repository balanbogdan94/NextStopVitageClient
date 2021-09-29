import React, { createContext, ReactElement, useContext } from 'react';
import { User } from '../model/user';
import { logInService, logOutService } from '../service/AuthService';

type ContextProps = {
	user: User | undefined | null;
	logIn: CallableFunction;
	logOut: CallableFunction;
};

const AuthorizationContext = createContext<Partial<ContextProps>>({});

export function useAuthorization() {
	const context = useContext(AuthorizationContext);

	if (context === undefined) {
		throw new Error(
			'useAuthorization must be used within a AuthorizationProvider',
		);
	}
	return context;
}

export function AuthorizationProvider({ children }): ReactElement {
	const [user, setUser] = React.useState<User | undefined | null>();

	async function logIn(user, pass): Promise<void> {
		try {
			const loggedUser: User = await logInService(user, pass);
			setUser(loggedUser);
		} catch (error) {
			throw error;
		}
	}

	async function logOut(): Promise<void> {
		try {
			await logOutService();
			setUser(null);
		} catch (error) {
			throw error;
		}
	}

	const value = {
		user,
		logIn,
		logOut,
	};

	return (
		<AuthorizationContext.Provider value={value}>
			{children}
		</AuthorizationContext.Provider>
	);
}
