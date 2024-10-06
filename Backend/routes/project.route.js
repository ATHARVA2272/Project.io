import express from "express";
import { addProject, getProjectsByLeaderId } from '../controller/project.controller.js';
import { getAvailableProjects } from "../controller/project.controller.js";
import { updateProject } from "../controller/project.controller.js";
import { deleteProject } from "../controller/project.controller.js";
import { getCompletedProjects } from "../controller/project.controller.js";
import { sendEmail } from "../controller/send-email.controller.js";


const router=express.Router()


router.post("/pr" , addProject);

router.get('/available-projects', getAvailableProjects);
router.get('/leader/:id',getProjectsByLeaderId);
router.put('/:id',updateProject);
router.delete('/:id',deleteProject);
router.get('/completed',getCompletedProjects);
router.post('/send-email', sendEmail);


export default router;