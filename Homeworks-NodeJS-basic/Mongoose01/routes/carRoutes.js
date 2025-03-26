import { Router } from "express";
import CarController from "../controllers/carControllers.js";
import ValidateRequest from "../middlewares/validateRequest.js";
import { createCarSchema, updateCarSchema } from '../schemas/carSchema.js'

const CarRouter = Router()
export default CarRouter