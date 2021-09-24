import WrongCredentialsException from "./wrongCredentialsException";

enum FirebaseError { 
    AUTH_INVALID_EMAIL = "auth/invalid-email",
    AUTH_USER_NOT_FOUND="auth/user-not-found",
    AUTH_WRONG_PASSWORD="auth/wrong-password",
}

export function getFirebaseError(error) {
    const { code } = error;
    switch (code) {
        case FirebaseError.AUTH_INVALID_EMAIL:
        case FirebaseError.AUTH_USER_NOT_FOUND:
        case FirebaseError.AUTH_WRONG_PASSWORD:
            return new WrongCredentialsException()
        default:
            return error;
    }
}


