import { signInFirebase, signOutFirebase } from '../firebase/api/authorization';
import { User } from '../model/user';

export async function logInService(email: string, pass: string): Promise<User> {
	return await signInFirebase(email, pass);
}
export async function logOutService(): Promise<void> {
	return await signOutFirebase();
}
