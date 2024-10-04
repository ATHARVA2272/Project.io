import React from "react";
import Home from "./Home";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import User from "./components/User";
import Userprofile from "./components/Userprofile";
import { Toaster } from "react-hot-toast";



function App() {

  return (
    <>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path='/User' element={<Userprofile/>}></Route>
          
        </Routes>
        <Toaster />
        
    </>
  );
}

export default App;
