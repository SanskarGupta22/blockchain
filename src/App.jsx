
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPage from './MyPage';

function App() {
  return (
    <div className="App">
      {/* Your existing components */}
      <MyPage /> {/* Add this line to include the MyPage component */}
    </div>
    
  );
}

export default App;
