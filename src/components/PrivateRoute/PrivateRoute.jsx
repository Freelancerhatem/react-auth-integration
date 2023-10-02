import { useContext } from "react";
import { AuthContext } from "../AuthProvide/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
    if(loading){
       return <div className="w-full h-[90vh] flex items-center justify-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/signin'>
            
        </Navigate>
    );
};

export default PrivateRoute;