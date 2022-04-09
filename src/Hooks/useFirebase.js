import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, updateProfile, getIdToken } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = React.useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

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
                saveToDatabase(email, name, "POST");
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
                saveToDatabase(result.user.email, result.user.displayName, "PUT");
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
            displayName: name,
        }).then(() => { })
            .catch((error) => { });
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                  .then((idToken) => {
                    setToken(idToken);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                setUser({});
              }
        });
        return () => unSubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`https://quiet-citadel-61809.herokuapp.com/user/${user.email}`)
          .then((res) => res.json())
          .then((data) => setAdmin(data.admin));
      }, [user.email]);


    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => { })
            .finally(() => setIsLoading(false));
    };

    const saveToDatabase = (email, displayName, method) => {
        const user = { email, displayName };
        const url = `https://quiet-citadel-61809.herokuapp.com/users`
        fetch(url,{
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
    }


    return {
        user,
        admin,
        RegisterUser,
        signInUser,
        googleSignIn,
        logout,
        isLoading,
        token,
        authError,

    };
};

export default useFirebase;