import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createNewUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut =() =>{
        return signOut(auth);
    }

    useEffect(() =>{
      const unsubscibe = onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
      })
      return () =>{
        unsubscibe;
      }
    },[])

    const authInfo ={
        user,
        setUser,
        createNewUser,
        logOut
     
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;