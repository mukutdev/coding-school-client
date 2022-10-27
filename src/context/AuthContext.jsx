import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import app from "../firebase/firebase.config";

export const AuthProviderContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)


  // handle new user function
  const  handleNewUserWithEmailPass =  (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update new user function

    const handleUpdateProfile =  (name, photoUrl) => {
     setLoading(true)
      return updateProfile(auth.currentUser, {
      displayName:  name,
      photoURL:  photoUrl,
    });
  };

  // handleNewUserSignInWithEmailPass function

  const handleSignInWithEmailPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // handleGoogleSignIn function

  const handleGoogleSignInMethod = provider => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  //handleGithubSignIn function

  const handleGithubSignInMethod = provider => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  //handleSignOut  function

  const handleSignOut = () => {
    setLoading(true)
    signOut(auth)
    .then(() =>{})
  };

    // save user info on auth state changed
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();

    } , [])
    
  const userInfo = {
    user,
    handleNewUserWithEmailPass,
    handleUpdateProfile,
    handleSignInWithEmailPass,
    handleGoogleSignInMethod,
    handleGithubSignInMethod,
    handleSignOut,
    loading
  };
  return (
    <AuthProviderContext.Provider value={userInfo}>
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthContext;
