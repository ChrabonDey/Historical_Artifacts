import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
    const location=useLocation()
   
    
    if(loading){
        return <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    }
    if(!user){
        return  <Navigate state={{from:location.pathname}}  to={"/login"}></Navigate>
    }
    return (
        children
    );
};

export default PrivateRoute;