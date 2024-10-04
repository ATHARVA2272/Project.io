import React from 'react'
import Login from './Login'

function Nav({name,on}) {

  return (
    <nav className="bg-gray-100 text-black flex justify-between px-24 pb-10 h-16  pt-4 ">
		<div className="text-4xl font-extrabold text-blue-900  items-center ">Project.io </div>
		<div className="items-center justify-around">
			<a href="#" className="text-xl px-4">Home</a>
			<a href="#" className="text-xl px-4">About</a>
			<a href="#" className="text-xl px-4">Blog</a>
			<a href="#" className="text-xl px-4">Contact</a>
			{/* <a href="#" className="text-xl px-4 bg-blue-600 py-2 text-white hover:bg-blue-800 rounded-md">Login</a> */}
			<button className="bg-blue-600 px-6 py-2 text-white rounded-lg border-none  hover:bg-blue-800 outline-none font-semibold " id="#Logbtn" onClick={on} >{name}</button>
					
		</div>

		
	</nav>
  )
}

export default Nav
