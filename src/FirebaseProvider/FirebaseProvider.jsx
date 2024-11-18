import React, { createContext, useEffect, useState } from 'react'
import Auth from '../firebaseConfig/Firebaseconfig'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, FacebookAuthProvider,GithubAuthProvider, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth'


export const FirebaseContext = createContext(null)

const FirebaseProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const facebookProvider = new FacebookAuthProvider()

  const createUser = (email,pass)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(Auth,email,pass)
  }

  const userSignIn =(email,pass)=>{
    setLoading(true)
    return signInWithEmailAndPassword(Auth,email,pass)
  }

  const logOutUser =async ()=>{
    setLoading(true)
    try{
      await signOut(Auth)
    }
    catch(err) {
      console.error('SignOut Error', err)
    }
    finally{
      setLoading(false)
    }
  }

  const singInWithGoogle =()=>{
    return signInWithPopup(Auth,googleProvider)
  }


  const singInWithGithub =()=>{
    return signInWithPopup(Auth,githubProvider)
  }


  const singInWithFacebook =()=>{
    return signInWithPopup(Auth,facebookProvider)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(Auth,currentUser=>{
      if(currentUser){
        console.log(currentUser)
        setUser(currentUser)
      }else{
        setUser(null)
      }
    })

    return ()=> unsubscribe()

  },[])

  const authInfo ={
    createUser,
    userSignIn,
    logOutUser,
    singInWithGoogle,
    singInWithGithub,
    singInWithFacebook,
    user,
    loading
  }

  return (
    <FirebaseContext.Provider value={authInfo}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
