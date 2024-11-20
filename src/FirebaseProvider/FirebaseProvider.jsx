import React, { createContext, useEffect, useState } from "react";
import Auth from "../firebaseConfig/Firebaseconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import Swal from "sweetalert2";

export const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, pass);
  };

  const userSignIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, pass);
  };

  const logOutUser = async () => {
    setLoading(true);
    try {
      await signOut(Auth);
    } catch (err) {
      Swal.fire({
        title: `${err.message || err.code}`,
        text: "Thanks For Being With Us",
        icon: "warning",
        confirmButtonText: "close",
      });
    } finally {
      setLoading(false);
    }
  };

  const singInWithGoogle = () => {
    return signInWithPopup(Auth, googleProvider);
  };

  const singInWithGithub = () => {
    return signInWithPopup(Auth, githubProvider);
  };

  const singInWithFacebook = () => {
    return signInWithPopup(Auth, facebookProvider);
  };

  const userProfileUpdate = async (updatedData) => {
    if (Auth.currentUser) {
      try {
        await updateProfile(Auth.currentUser, updatedData);
        await Auth.currentUser.reload();
        setUser({ ...Auth.currentUser });
      } catch (err) {
        Swal.fire({
          title: `${err.message || err.code}`,
          text: "Thanks For Being With Us",
          icon: "warning",
          confirmButtonText: "close",
        });
      }
    }
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(Auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [Auth]);

  const authInfo = {
    createUser,
    userSignIn,
    logOutUser,
    singInWithGoogle,
    singInWithGithub,
    singInWithFacebook,
    userProfileUpdate,
    resetPassword,
    user,
    loading,
  };

  return (
    <FirebaseContext.Provider value={authInfo}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
