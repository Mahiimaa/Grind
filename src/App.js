import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Forgot from "./pages/forgot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/forgot" element={<Forgot />} /> 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
