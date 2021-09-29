import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	UserCredential,
} from 'firebase/auth';
import { getFirebaseError } from '../exception/firebaseErrorFactory';
import firebaseApp from '../firebase';
import { User } from './../../model/user';

const auth = getAuth(firebaseApp);

async function signInFirebase(email, pass): Promise<User> {
	try {
		const { user: userFromFirebase }: UserCredential =
			await signInWithEmailAndPassword(auth, email, pass);
		const user: User = {
			email: userFromFirebase.email!,
			uid: userFromFirebase.uid,
			displayName: userFromFirebase.displayName,
		};
		return user;
	} catch (error: any) {
		throw getFirebaseError(error);
	}
}

async function signOutFirebase(): Promise<void> {
	await signOut(auth).catch((exception) => {
		throw exception;
	});
}

export { signInFirebase, signOutFirebase };
