import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Import Tippy styles
import boy from "../assets/boy.png";
import { useState } from 'react';
import AddProjectModal from './project';



const User = ({ userData }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
 
  return (
    <>
      <div className="flex bg-gray-300">
        <div className="flex-row justify-between items-center p-5 bg-gray-200">
          <div className="p-8">
            <button className="bg-blue-500 hover:bg-green-900 text-white font-bold py-8 px-8 rounded-2xl"   onClick={openModal}>
              Add Projects
            </button>
            <AddProjectModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <div className="p-8">
            <button className="bg-blue-500 hover:bg-green-900 text-white font-bold py-8 px-6 rounded-2xl">
              Update Projects
            </button>
          </div>
          <div className="p-8">
            <button className="bg-blue-500 hover:bg-green-900 text-white font-bold py-8 px-8 rounded-2xl">
              Past Projects
            </button>
          </div>
          <div className="p-8 px-13">
            <button className="bg-blue-500 hover:bg-green-900 text-white font-bold py-8 px-11 rounded-2xl">
              Vacancy
            </button>
          </div>
        </div>
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 justify-around bg-gray-300 text-gray-900">
          {/* Main Column */}
          <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
              {/* Image for mobile view */}
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
                <img src={boy} alt="boy"/>
              </div>
              {userData && (
                <>
                  <h1 className="text-3xl font-bold pt-8 lg:pt-0">Welcome {userData.username}!</h1>
                  <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                  <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    Student
                  </p>
                  <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                    <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                    </svg>
                    {userData.skills}
                  </p>
                  <p className="pt-8 text-sm">{userData.bio}</p>
                  <div className="pt-12 pb-8">
                    <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" onClick={() => alert('Update Profile functionality not implemented')}>
                      Update Profile
                    </button>
                  </div>
                </>
              )}
              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <Tippy content="@facebook_handle">
                  <a className="link" href="#">
                    <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>Facebook</title>
                      <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                    </svg>
                  </a>
                </Tippy>
                <Tippy content="@twitter_handle">
                  <a className="link" href="#">
                    <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>Twitter</title>
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.368 3.94 4.818-.412.111-.845.171-1.291.171-.315 0-.626-.03-.93-.087.626 1.953 2.444 3.379 4.601 3.418-1.684 1.319-3.809 2.104-6.102 2.104-.396 0-.787-.023-1.175-.069 2.188 1.401 4.779 2.22 7.564 2.22 9.065 0 14.028-7.514 14.028-14.035 0-.214-.006-.425-.016-.637.962-.694 1.8-1.561 2.464-2.548z" />
                    </svg>
                  </a>
                </Tippy>
                <Tippy content="@linkedin_handle">
                  <a className="link" href="#">
                    <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>LinkedIn</title>
                      <path d="M23.994 24V15.625c0-4.034-3.336-7.313-7.44-7.313-3.552 0-5.19 1.965-6.072 3.507v-.278H8.628v12.928H0V8.625h8.747v1.569c.846-1.361 2.367-3.251 5.167-3.251 4.09 0 7.291 2.056 7.291 7.338zM5.601 7.545c-1.285 0-2.346 1.062-2.346 2.361 0 1.301 1.061 2.362 2.346 2.362s2.366-1.061 2.366-2.362-1.061-2.361-2.366-2.361zM22.807 24h-7.445V14.898c0-2.611-1.042-4.459-3.289-4.459-1.788 0-2.822 1.207-3.286 2.378v-.118H5.576v9.768h7.432v-5.12c0-2.777 1.228-4.567 3.344-4.567 1.835 0 2.656 1.184 2.656 3.08v6.607h.005z" />
                    </svg>
                  </a>
                </Tippy>
              </div>
            </div>
          </div>
          {/* Image for larger screens */}
          <div className="hidden lg:block lg:w-2/5 lg:rounded-r-lg lg:rounded-l-none px-6 lg:px-12 lg:py-6">
            <div className="rounded-full shadow-xl h-full bg-cover bg-center">
              <img src={boy} alt="boy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
