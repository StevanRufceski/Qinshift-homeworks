import { Router } from "express";
import PassengerController from "../controllers/passengerControllers.js";
import ValidateRequest from "../middlewares/validateRequest.js";
import { createPassengerSchema, updatePassengerSchema } from '../schemas/passengerSchema.js'

const PassengerRouter = Router()
PassengerRouter.get('/all', PassengerController.getAllPassengers);
PassengerRouter.put('/update/:id', ValidateRequest(updatePassengerSchema), PassengerController.updatePassenger);
PassengerRouter.post('/create', ValidateRequest(createPassengerSchema), PassengerController.createPassenger);
PassengerRouter.delete('/delete/:id', PassengerController.deletePassenger);
PassengerRouter.get('/:id', PassengerController.getPassengerById);
export default PassengerRouter