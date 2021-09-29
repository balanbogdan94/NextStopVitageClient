class WrongCredentialsException extends Error {
	constructor() {
		super('Username or password are invalid.');
	}
}

export default WrongCredentialsException;
