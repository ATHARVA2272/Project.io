import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function AddProjectModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [leaderId, setLeaderId] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('Users'));
    if (user && user._id) {
      setLeaderId(user._id);
    }
  }, []);

  const onSubmit = async (data) => {
    const projectData = {
      ...data,
      leader: leaderId,
    };

    try {
      await axios.post("http://localhost:4000/api/project", projectData);
      toast.success("Project added successfully");
      onClose();
    } catch (error) {
      console.error("Error adding project", error);
      toast.error("Error adding project");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Add New Project</h3>
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

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProjectModal;
