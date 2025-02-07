import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './PrivateRoute.css';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [showPopup, setShowPopup] = useState(false);
  const authToken = localStorage.getItem('jwt'); // Retrieve the token
  const isAuthenticated = !!authToken; // Example authentication check

  useEffect(() => {
    console.log('authToken:', authToken);
    console.log('isAuthenticated:', isAuthenticated);
    if (!isAuthenticated) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [isAuthenticated, authToken]);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  if (!isAuthenticated) {
    return (
      <>
        {showPopup && (
          <div className="popup">
            <div className="popup-inner">
              <h2>Please Sign In first</h2>
              <button onClick={handlePopupClose}>Close</button>
            </div>
          </div>
        )}
        <Navigate to="/login" />
      </>
    );
  }

  return <Component {...rest} />;
};

export default PrivateRoute;