import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirebaseError } from '../../exceptions/firebaseErrorFactory';
import firebaseApp from '../firebase';
import { User } from './../../model/user';

const auth = getAuth(firebaseApp);

async function signIn(email, pass): Promise<User> {
	try {
		const { user } = await signInWithEmailAndPassword(auth, email, pass);
		const userDTO: User = {
			email: user.email!,
			uid: user.uid,
			displayName: user.displayName,
		};
		return userDTO;
	} catch (error: any) {
		throw getFirebaseError(error);
	}
}

async function signOutUser(): Promise<void> {
	await signOut(auth).catch((exception) => {
		throw exception;
	});
}

export { signIn, signOutUser };
