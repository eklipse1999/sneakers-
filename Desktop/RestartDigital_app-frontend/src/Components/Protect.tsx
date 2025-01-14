import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from './Spinner';
import axios from 'axios';

type ProtectRouteProps = {
  children: React.ReactNode;
};

    

const ProtectedRoute: React.FunctionComponent<ProtectRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async (): Promise<void> => {
      try {
        const token = sessionStorage.getItem("authToken");

        // Check the main auth endpoint first
        const response = await axios.get('https://web-dev-learning.onrender.com/app/protected', { withCredentials: true , 
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response) {
         
          setIsAuthenticated(response.data.ok);
          return;
        };
        // If all checks fail, set to not authenticated
        setIsAuthenticated(false);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []); 

  // Display loading spinner while authentication is being checked
  if (isAuthenticated === null) return <Spinner />;

  // Redirect to login page if not authenticated
  return isAuthenticated ? <>{children}</> : <Navigate to="/login/user" />;
};

export default ProtectedRoute;
