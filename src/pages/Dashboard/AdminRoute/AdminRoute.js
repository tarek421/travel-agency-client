import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, admin } = useAuth();
    return user?.email && admin ? children : <Navigate to="/" />;
};

export default AdminRoute;