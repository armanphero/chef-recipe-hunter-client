import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Placeholder from '../shared/Placeholder';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <Placeholder />
    }
    else if (user) {
        return children;
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;