import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'; 
import Profile from './pages/Profile'; 
import MyPage from './pages/MyPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define other routes here */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/MyPage" element={<MyPage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
