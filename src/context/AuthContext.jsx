import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
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

  const userInfo = { user, handleNewUserWithEmailPass, handleUpdateProfile , handleSignInWithEmailPass };
  return (
    <AuthProviderContext.Provider value={userInfo}>
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthContext;
