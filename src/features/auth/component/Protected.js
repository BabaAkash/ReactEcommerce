import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {selectLoggedInUser,} from '../authSlice';
function Protected({children}){
    const user = useSelector(selectLoggedInUser)
    // agar user exist krta nhi karta hai toh login page par jayega
    if(!user){
      return <Navigate to={'/login'} replace={true}></Navigate>
    }
  return children;
}

export default Protected;