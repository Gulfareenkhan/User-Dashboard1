import React, { useState } from 'react';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', address: '456 Elm St' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', address: '789 Oak St' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>User Dashboard</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;