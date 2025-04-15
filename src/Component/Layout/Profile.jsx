import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Profile = () => {
const {user} = useContext(AuthContext);
    return (
        <div>
            This is {user?.email} profile
        </div>
    );
};

export default Profile;