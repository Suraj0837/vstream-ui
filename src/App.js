import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LoginSignup from "./components/login";
import Home from "./components/Home";
<<<<<<< HEAD
import Dashboard from "./components/Dashboard";
import VideoPlayer from "./components/VideoPlayer";
=======
<<<<<<< HEAD
//git
=======
import Dashboard from "./components/Dashboard";
import VideoPlayer from "./components/VideoPlayer";

>>>>>>> 6f94e0f (Video-upload option added)
>>>>>>> 6fa05e7 (Video-upload option added on UI)
const App = () => {
  return (
    <div className="App">
      <Navbar />        
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginSignup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/video/:id" element={<VideoPlayer />} />
<<<<<<< HEAD
        </Routes>
    
=======
      </Routes>
>>>>>>> 6fa05e7 (Video-upload option added on UI)
    </div>
  );
};

export default App;
