import React, { useState } from 'react';
import Button from './Button';

const User = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="user">
      <h3>{user.name}</h3>
      <Button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </Button>
      {showDetails && (
        <div className="user-details">
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
        </div>
      )}
    </div>
  );
};

export default User;