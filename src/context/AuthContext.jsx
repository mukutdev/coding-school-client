import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthProviderContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const user = { name: "Mukut" };

  // handle new user function
  const handleNewUserWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update new user function

  const handleUpdateProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      
  };

  // handleNewUserSignInWithEmailPass

  const handleSignInWithEmailPass = (email, password)=>{
    return signInWithEmailAndPassword(auth , email, password);
  }

  // handleGoogleSignInMethod

  const handleGoogleSignInMethod = (provider)=>{
     return signInWithPopup(auth , provider)
  }

  //handleGithubSignInMethod

  const handleGithubSignInMethod = (provider)=>{
    return signInWithPopup(auth , provider)
  }

  const userInfo = { user, handleNewUserWithEmailPass, handleUpdateProfile , handleSignInWithEmailPass , handleGoogleSignInMethod,handleGithubSignInMethod };
  return (
    <AuthProviderContext.Provider value={userInfo}>
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthContext;
