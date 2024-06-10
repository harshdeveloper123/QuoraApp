import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Screens/HomePage'
import Notification from './Screens/Notification';
import './App.css'

function App() {
  return (
    // Applying of routes that linked the home page to notification page and vice versa 
    <Router>
    <div className="App">
      <Routes>
        {/* you can also see this linked on below named components  */}
      <Route path = "/" element= {<HomePage/>}/>
      <Route path="/notifications" element={<Notification/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
   