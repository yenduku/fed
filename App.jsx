// Import necessary libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext'; // Assuming UserContext provides context for the user
import Parent from './Parent';
import UserProfile from './UserProfile';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <h1>Patient Monitoring System</h1>
          <Routes>
            {/* Assuming Parent is the home route */}
            <Route path="/" element={<Parent />} />
            
            {/* UserProfile route */}
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
