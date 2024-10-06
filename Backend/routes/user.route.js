import express from "express";
import { signup } from '../controller/user.controller.js';
import { login } from "../controller/user.controller.js";
import { logout } from "../controller/user.controller.js";
import { getUserById } from "../controller/user.controller.js";
import { getAllUsers } from "../controller/user.controller.js";
import secureRoute from "../middleware/auth.js";

const router=express.Router()


router.post("/signup" , signup);
router.post("/login",login);
router.post("/logout",logout);
router.get('/:id',getUserById);
router.get("/ld",getAllUsers);

export default router;