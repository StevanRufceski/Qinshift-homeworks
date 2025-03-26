import { Router } from "express";
import RideController from "../controllers/rideControllers.js";
import ValidateRequest from "../middlewares/validateRequest.js";
import { createRideSchema, updateRideSchema } from '../schemas/rideSchema.js'

const RideRouter = Router()
export default RideRouter