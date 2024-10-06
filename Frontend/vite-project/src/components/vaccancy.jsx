import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const VacancyModal = ({ isOpen, onClose }) => {
  const [projects, setProjects] = useState([]);
  const [leaders, setLeaders] = useState({}); // Store leader info here
  const userId = localStorage.getItem('userID'); // Assuming userId is stored in localStorage

  // Function to fetch project details
  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://project-io-gnaf.onrender.com/api/project/available-projects');
      // Filter out projects where the user is the leader
      const filteredProjects = response.data.filter(project => project.leader !== userId);
      setProjects(filteredProjects);
      
      // Fetch leader info for each project
      filteredProjects.forEach(project => {
        fetchLeaderInfo(project.leader); // Assuming project.leader is the leader ID
      });
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // Function to fetch leader details
  const fetchLeaderInfo = async (leaderId) => {
    if (leaderId && !leaders[leaderId]) { // Fetch only if not already fetched
      try {
        const response = await axios.get(`https://project-io-gnaf.onrender.com/api/user/${leaderId}`);
        setLeaders(prevLeaders => ({
          ...prevLeaders,
          [leaderId]: response.data,
        }));
      } catch (error) {
        console.error('Error fetching leader info:', error);
      }
    }
  };

  // Fetch data when the modal opens
  useEffect(() => {
    if (isOpen) {
      fetchProjects();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Available Vacancies">
      <div className="p-4 text-zinc-950">
        <h2 className="text-2xl font-bold mb-4">Available Projects</h2>
        {projects.length > 0 ? (
          <ul>
            {projects.map((project) => {
              const leader = leaders[project.leader]; // Fetch leader info using the ID directly
              return (
                <li key={project.id} className="mb-2 border-b pb-2">
                  <h3 className="font-bold text-red-600">{project.title}</h3>
                  <p>Description: {project.description}</p>
                  <p>Vacancies: {project.vacancies}</p>
                  <p className='font-bold'>Leader: {leader ? leader.fullName : 'Loading...'}</p>
                  <p className='font-bold'>Leader Email: {leader ? leader.email : 'Loading...'}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No projects available at the moment.</p>
        )}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default VacancyModal;
