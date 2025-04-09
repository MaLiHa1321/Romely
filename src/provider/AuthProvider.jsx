import { createContext, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const authInfo ={
        user,
        setUser
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;