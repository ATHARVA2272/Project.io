import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function UpdateProjectModal({ isOpen, onClose, project, refreshProjects }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [leaderId, setLeaderId] = useState('');
  const [pid, setPid] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('userID');
    if (user) {
      setLeaderId(user);
    }

    const fetchProjectDetails = async () => {
      if (project && project._id) {
        setPid(project._id); // Set project ID if available

        // Set form values with existing project details
        setValue('title', project.title);
        setValue('description', project.description);
        setValue('requiredSkills', project.requiredSkills.join(',')); // Assuming it's an array
        setValue('vacancies', project.vacancies);
        setValue('isCompleted', project.isCompleted); // Populate the completion status
      }
    };

    if (isOpen && project) {
      fetchProjectDetails();
    }
  }, [isOpen, project, setValue]);

  const onSubmit = async (data) => {
    const projectData = {
      ...data,
      leader: leaderId,
    };

    try {
      await axios.put(`http://localhost:4000/api/project/${pid}`, projectData);
      toast.success("Project updated successfully");
      onClose(); // Close modal after successful update
      refreshProjects(); // Refresh the project list after updating
    } catch (error) {
      console.error("Error updating project", error);
      toast.error("Error updating project");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Update Project</h3>
          <Link
            to="#"
            className="btn btn-sm btn-circle btn-ghost"
            onClick={onClose}
          >
            ✕
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Title</label>
  <input
    type="text"
    placeholder="Project Title"
    className="w-full px-3 py-2 border rounded-md outline-none"
    {...register("title", { required: "Title is required" })}
  />
  {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
</div>

<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Description</label>
  <textarea
    placeholder="Project Description"
    className="w-full px-3 py-2 border rounded-md outline-none"
    {...register("description", { required: "Description is required" })}
  />
  {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
</div>

<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Required Skills</label>
  <input
    type="text"
    placeholder="Comma-separated skills"
    className="w-full px-3 py-2 border rounded-md outline-none"
    {...register("requiredSkills", { required: "Skills are required" })}
  />
  {errors.requiredSkills && <p className="text-red-500 text-sm">{errors.requiredSkills.message}</p>}
</div>

<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Vacancies</label>
  <input
    type="number"
    placeholder="Number of vacancies"
    className="w-full px-3 py-2 border rounded-md outline-none"
    {...register("vacancies", { required: "Vacancies are required" })}
  />
  {errors.vacancies && <p className="text-red-500 text-sm">{errors.vacancies.message}</p>}
</div>

<div className="mb-4">
  <label className="inline-flex items-center">
    <input
      type="checkbox"
      className="form-checkbox"
      {...register("isCompleted")}
    />
    <span className="ml-2">Is Completed</span>
  </label>
</div>

<div className="flex justify-end">
  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
  >
    Update Project
  </button>
</div>
</form>
      </div>
    </div>
  );
}

export default UpdateProjectModal;


