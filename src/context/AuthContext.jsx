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


  // handle new user function
  const handleNewUserWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update new user function

  const handleUpdateProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // handleNewUserSignInWithEmailPass function

  const handleSignInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // handleGoogleSignIn function

  const handleGoogleSignInMethod = provider => {
    return signInWithPopup(auth, provider);
  };

  //handleGithubSignIn function

  const handleGithubSignInMethod = provider => {
    return signInWithPopup(auth, provider);
  };

  //handleSignOut  function

  const handleSignOut = () => {
    signOut(auth)
  };

    // save user info on auth state changed
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
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
  };
  return (
    <AuthProviderContext.Provider value={userInfo}>
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthContext;
