import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signUp(name, email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function signIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logOut() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false);
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signUp,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
