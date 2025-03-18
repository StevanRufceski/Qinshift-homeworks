import { Router } from "express";
import TaskController from "../controllers/tasks.controllers.js"

const router = Router();

router.get('/', TaskController.getAllTasks);
router.post('/', TaskController.createTask);

export default router
