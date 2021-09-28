import React, { createContext, useContext } from 'react';
import { useHistory } from 'react-router';
import { signIn, signOutUser } from '../firebase/api/authorization';
import WrongCredentialsException from "../exceptions/wrongCredentialsException"


const AuthorizationContext = createContext();

export function useAuthorization() {
	const context = useContext(AuthorizationContext);

	if (context === undefined) {
		throw new Error('useAuthorization must be used within a AuthorizationProvider');
	}
	return context;
};

export function AuthorizationProvider({ children }) {
	const [user, setUser] = React.useState();
    const history = useHistory()

    async function logIn(user, pass) {
        try {
            const loggedUser = await signIn(user, pass);
            setUser(loggedUser);
            history.push('/admin');
        } catch (error) {
            if (error instanceof WrongCredentialsException) {
                alert(error.message);
            } else {
                console.log(error);
            }
        }
    }

    async function logOut() {
        try {
            await signOutUser();
            setUser(null);
            history.push('/admin/login');
        } catch (error) {
            console.log(error)
            throw error
            
        }
    }


    console.log(user)

    const value = {
        user,
        logIn,
        logOut
    }

	return (
		<AuthorizationContext.Provider value={value}>
			{children}
		</AuthorizationContext.Provider>
	);
};



