import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase-init';
import Loading from '../Loading/Loading';

const Private = ({ children }) => {
    const [user, load] = useAuthState(auth);
    const location = useLocation();
    if (load) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate >
    }
    return children;
};

export default Private;