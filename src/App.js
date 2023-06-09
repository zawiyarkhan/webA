import './App.css';
import {Homepage} from './Homepage';
import React, {useState} from "react";
import {SignupForm} from './SignupForm';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const[currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Homepage" element = {<Homepage/>}/>
          <Route path="/SignupForm" element = {<SignupForm/>}/>
          <Route path="/Portal" element = {<Portal/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;