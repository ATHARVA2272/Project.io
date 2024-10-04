import React from 'react'
import Home1 from './components/Home1'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Login from './components/Login'

function Home() {
  const openLoginModal = () => {
		document.getElementById("my_modal_3").showModal();
	  };
  return (
    <>
    <Nav 
    name="Login"
    on={openLoginModal}></Nav>
    <Login>Login</Login>
    <Home1></Home1>
    <About></About>
    <Contact></Contact>
    </>
  )
}

export default Home
