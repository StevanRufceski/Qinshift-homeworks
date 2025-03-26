import { Router } from "express";
import PassengerController from "../controllers/passengerControllers.js";
import ValidateRequest from "../middlewares/validateRequest.js";
import { createPassengerSchema, updatePassengerSchema } from '../schemas/passengerSchema.js'

const PassengerRouter = Router()
export default PassengerRouter