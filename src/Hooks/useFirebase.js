import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = React.useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");

    let navigate = useNavigate();

    const auth = getAuth();

    const RegisterUser = (email, password, name) => {
        const loading = "Please Wait...";
        setIsLoading(true)
        toast.loading(loading)
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                UpdateUserName(name);
                navigate('/');
                toast.dismiss();
                toast.success("Register Successfully")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
                toast.dismiss();
                toast.error(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    const signInUser = (email, password) => {
        const loading = "Please Wait...";
            toast.loading(loading);
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate('/');
                toast.dismiss();
                toast.success('Successfully logged in!')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)
                toast.dismiss();
                toast.error(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/home');
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setAuthError(errorMessage);
                toast.error(errorMessage)
            })
            .finally(() => { setIsLoading(false) })
    }

    const UpdateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => { })
            .catch((error) => { });
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
        });
        return () => unSubscribed;
    }, [auth])


    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => { })
            .finally(() => setIsLoading(false));
    };
 

    return {
        RegisterUser,
        signInUser,
        googleSignIn,
        logout,
        isLoading,
        user,
        authError,

    };
};

export default useFirebase;