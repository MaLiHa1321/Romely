import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";



const PrivatwRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const navigate = useNavigate();
    if(loading){
        return <h2>loading</h2>;
    }
    if(user && user?.email){
        return children;
    }
    return navigate('/login');
};

export default PrivatwRoute;