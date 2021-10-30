import { useEffect, useState } from "react"
import { GoogleAuthProvider,getAuth,signInWithPopup, GithubAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from './FireBase.init';
initializeAuthentication();

const useFirebase =()=>{

    const [user,setUser]= useState([]);
    const auth=getAuth()

    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const singinWithGitHub =()=>{
        signInWithPopup(auth,gitProvider)
        .then(result=>{
            setUser(result.user)
        })
    }

    const singinWithGoogle = () =>{

  return  signInWithPopup(auth,provider)
    // .then(result =>{
    //    console.log(result.user);
    //     setUser(result.user);
    // })
    // .catch(error =>{
    //     console.log(error.message)
    // })
    
   };
   
   const logOut = () => {
    signOut(auth)
        .then(() => {
            setUser({})
        })
}

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
           
            setUser(user)

        }

   })
   
   
  });
   return {
       user,
        singinWithGitHub,
        singinWithGoogle,
        logOut 
    }
}
export default useFirebase;