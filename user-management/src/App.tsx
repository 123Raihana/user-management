import React from 'react';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/userList/UserList';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
