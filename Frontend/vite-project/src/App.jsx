import React from "react";
import Home from "./Home";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import User from "./components/User";
import Userprofile from "./components/Userprofile";
import { Toaster } from "react-hot-toast";
import Modal from 'react-modal';
import LeaderProjects from "./components/updateprojectlist";

// Set the app element, usually the root of your app


function App() {
  Modal.setAppElement('#root');
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path='/User' element={<Userprofile/>}></Route>
          <Route path="/leader-projects" element={<LeaderProjects />} />
          
        </Routes>
        <Toaster />
        
    </>
  );
}

export default App;
