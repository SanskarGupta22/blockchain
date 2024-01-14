import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'; 
import Profile from './pages/Profile'; 
import MyPage from './pages/MyPage';
import Question from './pages/Question';
import HomePage from './pages/HomePage';
import Pharma from './pages/Pharma';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';
import Product5 from './pages/Product5';
import Product6 from './pages/Product6';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define other routes here */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Question" element={<Question/>} />
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/Pharma" element={<Pharma/>} />
        <Route path="/Product2" element={<Product2/>} />
        <Route path="/Product3" element={<Product3/>} />
        <Route path="/Product4" element={<Product4/>} />
        <Route path="/Product5" element={<Product5/>} />
        <Route path="/Product6" element={<Product6/>} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
