import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({isAllowed , redirectTo="login"}) => {
    if(!isAllowed){
       return <Navigate to={redirectTo}/>
    }
    return <Outlet/>
};

export default ProtectedRoutes;