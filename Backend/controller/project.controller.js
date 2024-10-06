import mongoose from 'mongoose';
import Project from '../models/Project.model.js';  // Using ES6 import syntax

// Controller to add a new project
export const addProject = async (req, res) => {
    try {
        const { title, description, requiredSkills, vacancies, leader, isCompleted } = req.body;

        if (!title || !description || !requiredSkills || !vacancies || !leader) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }

        // Create a new project instance without teamMembers
        const newProject = new Project({
            title,
            description,
            leader: new mongoose.Types.ObjectId(leader),  // Convert leader to ObjectId
            requiredSkills: requiredSkills.split(','),  // Split skills into an array
            vacancies,
            isCompleted: isCompleted || false,  // Default to false if not provided
            completedAt: isCompleted ? new Date() : null,  // Set completedAt if project is marked as completed
        });

        // Save the project to the database
        await newProject.save();

        return res.status(201).json({ message: "Project created successfully", project: newProject });

    } catch (error) {
        console.error("Error adding project:", error);
        return res.status(500).json({ message: "Server error while adding project" });
    }
};




export const getProjectsByLeaderId = async (req, res) => {
  const  leaderId  = req.params.id // Get the leaderId from request parameters

  // Log the incoming leaderId for debugging
  //console.log("Received leaderId:", leaderId);

  // Check if the leaderId is a valid MongoDB ObjectId
//   if (!mongoose.Types.ObjectId.isValid(leaderId)) {
//     console.error("Invalid leader ID format:", leaderId);
//     return res.status(400).json({ message: "Invalid leader ID" });
//   }

  try {
    // Find all projects where the leader matches the provided leaderId
    const projects = await Project.find({ leader: leaderId });

    if (!projects.length) {
      console.log("No projects found for this leader:", leaderId);
      return res.status(404).json({ message: "No projects found for this leader" });
    }

    return res.status(200).json(projects); // Return the found projects
  } catch (error) {
    console.error("Error fetching projects by leader ID:", error);
    return res.status(500).json({ message: "Server error while fetching projects" });
  }
};


// Route to get projects with vacancies > 1 and not completed
export const getAvailableProjects = async (req, res) => {
  try {
    const projects = await Project.find({ vacancies: { $gt: 1 }, isCompleted: false });
    if (projects.length === 0) {
      return res.status(404).json({ message: 'No available projects with vacancies' });
    }
    res.json(projects);
  } catch (error) {
    console.error('Error fetching available projects:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const updateProject = async (req, res) => {
  try {
      const { id } = req.params; // Get project ID from request parameters
      const { title, description, requiredSkills, vacancies, leader, isCompleted } = req.body;

      // Validate required fields
      if (!title && !description && !requiredSkills && !vacancies && !leader && isCompleted === undefined) {
          return res.status(400).json({ message: "At least one field must be updated" });
      }

      // Create an update object
      const updateData = {};

      if (title) updateData.title = title;
      if (description) updateData.description = description;
      if (requiredSkills) updateData.requiredSkills = requiredSkills.split(','); // Convert to array
      if (vacancies) updateData.vacancies = vacancies;
      if (leader) updateData.leader = new mongoose.Types.ObjectId(leader); // Convert leader to ObjectId
      if (isCompleted !== undefined) {
          updateData.isCompleted = isCompleted;
          updateData.completedAt = isCompleted ? new Date() : null; // Update completedAt based on isCompleted
      }

      // Find and update the project
      const updatedProject = await Project.findByIdAndUpdate(id, updateData, { new: true });

      // Check if project was found
      if (!updatedProject) {
          return res.status(404).json({ message: "Project not found" });
      }

      return res.status(200).json({ message: "Project updated successfully", project: updatedProject });

  } catch (error) {
      console.error("Error updating project:", error);
      return res.status(500).json({ message: "Server error while updating project" });
  }
};


// Delete a project by ID
export const deleteProject = async (req, res) => {
    try {
      const projectId = req.params.id; // Get project ID from request params
  
      // Check if the project exists
      const project = await Project.findById(projectId);
  
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      // Delete the project
      await Project.findByIdAndDelete(projectId);
  
      // Respond with success
      return res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
      console.error('Error deleting project:', error);
      return res.status(500).json({ message: 'Server error. Unable to delete project.' });
    }
  };

  export const getCompletedProjects = async (req, res) => {
    try {
      const completedProjects = await Project.find({ isCompleted: true });
      return res.status(200).json(completedProjects);
    } catch (error) {
      console.error('Error fetching completed projects:', error);
      return res.status(500).json({ message: 'Server error. Unable to fetch completed projects.' });
    }
  };