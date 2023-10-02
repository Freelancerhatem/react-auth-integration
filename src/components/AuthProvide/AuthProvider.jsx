import { createContext, useEffect, useState } from "react";
import Proptypes from 'prop-types'

import { GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Googleprovider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    
    const[user,setUser]=useState(null);
    const[loading,setLoading] = useState(true);

    
    const createUser =(email,password)=>{
        setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password)
    };
    const SignInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    };  
    const logOut =()=>{
        setLoading(true);
       return signOut(auth);
    };
    const googleLogin =()=>{
        setLoading(true)
        signInWithPopup(auth, Googleprovider)
        .then(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err.message)
        })

    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe()
        }
            
      },[]);
    
    const authInfo ={
        user,
        loading,
        createUser,
        SignInUser,
        logOut,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children:Proptypes.node
}

export default AuthProvider;