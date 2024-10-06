import React, { useState } from 'react';
import AddProjectModal from './project';
import VacancyModal from './vaccancy'; 
import LeaderProjects from './updateprojectlist';
import PastProjectsModal from './Pastproject';
import boy from "../assets/boy.png";
import { Link } from 'react-router-dom';

const User = ({ userData, users }) => {
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isVacancyModalOpen, setIsVacancyModalOpen] = useState(false);
  const [isPastProjectsModalOpen, setIsPastProjectsModalOpen] = useState(false);

  const openAddProjectModal = () => setIsAddProjectModalOpen(true);
  const closeAddProjectModal = () => setIsAddProjectModalOpen(false);

  const openVacancyModal = () => setIsVacancyModalOpen(true);
  const closeVacancyModal = () => setIsVacancyModalOpen(false);

  const openPastProjectsModal = () => setIsPastProjectsModalOpen(true); // Open past projects modal
  const closePastProjectsModal = () => setIsPastProjectsModalOpen(false); // Close past projects modal

  return (
    <>
      <div className="flex bg-gray-300">
        <div className="flex-row justify-between items-center p-5 bg-gray-200">
          <div className="p-8">
            <button
              className="bg-blue-500 hover:bg-green-900 text-white font-bold py-8 px-8 rounded-2xl"
              onClick={openAddProjectModal}
            >
              Add Projects
            </button>
            <AddProjectModal isOpen={isAddProjectModalOpen} onClose={closeAddProjectModal} />
          </div>

          <div className="p-8">
            {/* Corrected Link usage */}
            <Link to="/leader-projects" className="bg-blue-500 hover:bg-green-900 text-white font-bold py-8 px-6 rounded-2xl flex items-center justify-center">
              Update Projects
            </Link>
          </div>

          <div className="p-8">
            <button className="bg-blue-500 hover:bg-green-900 text-white font-bold py-8 px-8 rounded-2xl" onClick={openPastProjectsModal}>
              Past Projects
            </button>
            <PastProjectsModal isOpen={isPastProjectsModalOpen} onClose={closePastProjectsModal} />
          </div>

          <div className="p-8 px-13">
            <button
              className="bg-blue-500 hover:bg-green-900 text-white font-bold py-8 px-11 rounded-2xl"
              onClick={openVacancyModal}
            >
              Vacancy
            </button>
            {/* Vacancy Modal */}
            <VacancyModal isOpen={isVacancyModalOpen} onClose={closeVacancyModal} />
          </div>
        </div>

        {/* User profile details */}
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 justify-around bg-gray-300 text-gray-900">
          <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
                <img src={boy} alt="boy" />
              </div>
              {userData && (
                <>
                  <h1 className="text-3xl font-bold pt-8 lg:pt-0">Welcome {userData.username}!</h1>
                  <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                  <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    Student
                  </p>
                  <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                    {userData.skills.map((skill, index) => (
                      <span key={index} className="mr-2">{skill}</span>
                    ))}
                  </p>
                  <p className="pt-8 text-sm">{userData.bio}</p>
                  <div className="pt-12 pb-8">
                    <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                      Update Profile
                    </button>
                  </div>
                </>
              )}
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
