import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LoginSignup from "./components/login";
import Home from "./components/Home";
//git
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginSignup />}></Route>
      </Routes>
    </div>
  );
};

export default App;
