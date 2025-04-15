import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createNewUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut =() =>{
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
      return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo ={
        user,
        setUser,
        createNewUser,
        logOut,
        createUser,
        loading,
     
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;