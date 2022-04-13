
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = ({ children }) => {
    
    let location = useLocation();

    const [user] = useAuthState(auth);
 
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children
}

export default RequireAuth;