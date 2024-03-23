import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, linkWithCredential } from "firebase/auth";
import app from '../firebase/firebase';

export const AuthContext = createContext({});
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }
    const githubSignIn = async() => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }
    const signOutUser = () => {
        return signOut(auth);
    }
    const updateUsersProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser,
            {
                displayName: displayName,
                photoURL: photoURL
            }
        )
    }
    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        signOutUser,
        updateUsersProfile,
        googleSignIn,
        githubSignIn
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
            console.log(user);
        });
        return () => {
            unsubscribe();
        };
    }, [])
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;