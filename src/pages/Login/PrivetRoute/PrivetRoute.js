import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivetRoute = ({ children }) => {
    const { user } = useAuth();
    return user?.email ? children : <Navigate to="/login" />;
};

export default PrivetRoute;