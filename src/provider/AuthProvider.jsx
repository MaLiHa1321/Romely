import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);
    const googleProvider  = new GoogleAuthProvider();

    const createNewUser =(email,password) =>{
      setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut =() =>{
      setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
      const unsubscibe = onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
        setLoading(false);
      })
      return () =>{
        unsubscibe;
      }
    },[])

    const createUser =(email,password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

        // google provider
        const googleSignIn = () =>{
          setLoading(true)
          return signInWithPopup(auth, googleProvider)
      } 

    const authInfo ={
        user,
        setUser,
        createNewUser,
        logOut,
        createUser,
        loading,
        googleSignIn
     
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;