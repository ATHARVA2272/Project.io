import React from 'react'
import front from "../assets/front.webp"

function Home1() {
  return (
    <>
      <div className="z-10 bg-white h-full w-full items-center justify-center bg-opacity-50 hidden absolute top-0 right-0" id="#loginpop">
        <div className="m-10 space-x-5 flex">
          <a href="/signup_signin" className="bg-blue-600 border-none text-white font-semibold p-4 rounded-xl">Get Started</a>
        </div>
      </div>

      <header className="flex justify-around items-center bg-white text-black">
        <div className="w-3/5 animate__animated animate__fadeIn animate__delay-1s">
          <img src={front} alt="Project.io Front" />
        </div>
        <div className="pl-20 w-2/5 animate__animated animate__jackInTheBox">
          <h1 className="text-4xl">Welcome to <span className="text-blue-600 font-bold">Project.io</span></h1>
          <div className="p-5">
            <ul className="font-sans space-y-5">
              <li></li>
              <li><span className="text-slate-900 font-bold">Revolutionize</span> Your Project Management. Join the Future of Collaborative Work.</li>
              <li><span className="text-slate-900 font-bold"></span>🚀 Streamline Projects</li>
              <li>🤝 Build Dynamic Teams</li>
              <li>🔥 Boost Efficiency</li>
              <li>🏆 Achieve Success</li>
            </ul>
          </div>
          <h3 className="text-xl">We are here with <span className="text-blue-600 font-bold">Project.io</span> to help you!</h3>
          <h2>Join Us Today and Transform How You Manage Projects!</h2>

          <br />
          <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600">
            <a href="/signup_signin"><span className="relative text-sm text-white">Get Started</span></a>
            <div className="flex items-center -space-x-3 translate-x-3">
              <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </header>
    </>
  )
}

export default Home1
