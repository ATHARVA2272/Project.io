// PastProjectsModal.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PastProjectsModal = ({ isOpen, onClose }) => {
  const [completedProjects, setCompletedProjects] = useState([]);
  const [leaders, setLeaders] = useState({});

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

  useEffect(() => {
    const fetchCompletedProjects = async () => {
      try {
        const response = await axios.get('https://project-io-gnaf.onrender.com/api/project/completed');
        const filteredProjects = response.data.filter(project => project.leader);
        setCompletedProjects(filteredProjects);
        filteredProjects.forEach(project => {
          fetchLeaderInfo(project.leader); // Fetch leader info for each project
        });
      } catch (error) {
        console.error('Error fetching completed projects:', error);
      }
    };

    if (isOpen) {
      fetchCompletedProjects();
    }
  }, [isOpen]);

  const sendEmailToLeader = async (leaderId) => {
    if (leaders[leaderId]) {
      const email = leaders[leaderId].email; // Get the leader's email
      const subject = 'Regarding Project Collaboration';
      const message = 'Hello, I would like to discuss the project further.';
  
      const userId = localStorage.getItem('userID'); // Get the user ID from local storage
  
      if (!userId) {
        alert("User ID not found. Please log in again.");
        return;
      }
  
      try {
        await axios.post('https://project-io-gnaf.onrender.com/api/project/send-email', {
          leaderEmail: email, // Pass the leader's email
          subject,
          message,
          userId, // Send the user ID to fetch the user's email on the server
        });
        alert('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email.');
      }
    }
  };
  
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-3xl h-3/4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4 text-black">
          <h3 className="font-bold text-lg">Completed Projects</h3>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">✕</button>
        </div>
        {completedProjects.length > 0 ? (
          <ul className='text-black'>
            {completedProjects.map((project) => (
              <li key={project._id} className="mb-4 border-b pb-2">
                <h3 className="text-lg font-bold text-red-600">{project.title}</h3>
                <p>Description: {project.description}</p>
                <p>Status: {project.isCompleted ? 'Completed' : 'Ongoing'}</p>
                {leaders[project.leader] && (
                  <div className="mt-2">
                    <p className="font-medium">Leader: {leaders[project.leader].name}</p>
                    <p>Email: {leaders[project.leader].email}</p>
                    <button
                      onClick={() => sendEmailToLeader(project.leader)}
                      className="bg-blue-500 text-white font-bold py-1 px-4 rounded mt-2"
                    >
                      Send Email
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No completed projects available.</p>
        )}
      </div>
    </div>
  );
};

export default PastProjectsModal;
