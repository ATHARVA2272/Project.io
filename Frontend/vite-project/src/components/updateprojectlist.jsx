import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import UpdateProjectModal from './updateproject'; // Import the Update modal component
import Nav from './Nav';
import { Navigate } from 'react-router-dom';

const LeaderProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  // Fetch projects of the leader using leader ID from localStorage
  const fetchLeaderProjects = async () => {
    const leaderId = localStorage.getItem('userID'); // Get the leader ID from localStorage

    if (!leaderId) {
      toast.error('Leader ID not found in localStorage');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:4000/api/project/leader/${leaderId}`);
      setProjects(response.data); // Set the projects in state
    } catch (error) {
      console.error('Error fetching leader projects:', error);
      toast.error('Error fetching projects');
    }
  };

  useEffect(() => {
    fetchLeaderProjects(); // Fetch the projects when the component mounts
  }, []);

  // Function to open the update modal
  const openUpdateModal = (project) => {
    setCurrentProject(project);
    setIsUpdateModalOpen(true);
  };

  // Function to close the update modal
  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setCurrentProject(null); // Reset current project when closing the modal
  };

  // Function to delete a project
  const deleteProject = async (projectId) => {
    try {
      await axios.delete(`http://localhost:4000/api/project/${projectId}`);
      toast.success('Project deleted successfully');
      fetchLeaderProjects(); // Refresh the project list after deleting
    } catch (error) {
      console.error('Error deleting project:', error);
      toast.error('Error deleting project');
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    toast.success("Logged out successfully");
    Navigate("/"); // Redirect to login page
  };

  return (
    <>
      <Nav name="Logout" on={handleLogout} />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
        {projects.length > 0 ? (
          <ul>
            {projects.map((project) => (
              <li key={project._id} className="mb-4 border-b pb-2">
                <h3 className="text-lg font-bold text-yellow-400">{project.title}</h3>
                <p>Description: {project.description}</p>
                <p>Vacancies: {project.vacancies}</p>
                <p>Status: {project.isCompleted ? 'Completed' : 'Ongoing'}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => openUpdateModal(project)} // Open the update modal with the selected project
                >
                  Update Project
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
                  onClick={() => deleteProject(project._id)} // Delete project
                >
                  Delete Project
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have no projects available.</p>
        )}

        {/* Render the Update Project Modal */}
        {isUpdateModalOpen && (
          <UpdateProjectModal
            isOpen={isUpdateModalOpen}
            onClose={closeUpdateModal}
            project={currentProject} // Pass the current project to be updated
            refreshProjects={fetchLeaderProjects} // Pass refresh function to reload data after update
          />
        )}
      </div>
    </>
  );
};

export default LeaderProjects;
