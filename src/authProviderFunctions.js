import { auth, googleProvider, facebookProvider } from "./firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
    isAuthenticated: false,
    async signin() {
        fakeAuthProvider.isAuthenticated = true;
        //to be implemented
    },
    checkStatus() {
        return auth;
    },
    async logOff() {
        fakeAuthProvider.isAuthenticated = false;
        await signOut(auth);
    },
    async googleSign() {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error('google signIn error', err);
        }
    },
    async facebookSign() {
        try {
            await signInWithPopup(auth, facebookProvider)
        } catch (err) {
            console.error('google error', err);
        }
    },
}

export { fakeAuthProvider };
