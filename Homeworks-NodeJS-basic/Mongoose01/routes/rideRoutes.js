import { Router } from "express";
import RideController from "../controllers/rideControllers.js";
import ValidateRequest from "../middlewares/validateRequest.js";
import { createRideSchema, updateRideSchema } from '../schemas/rideSchema.js'

const RideRouter = Router()
RideRouter.get('/all', RideController.getAllRides);
RideRouter.post('/create', RideController.createRide);
RideRouter.delete('/delete', RideController.deleteRide);
RideRouter.get('/:id', RideController.getRideById);
export default RideRouter