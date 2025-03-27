import { Router } from "express";
import PassengerController from "../controllers/passengerControllers.js";
import ValidateRequest from "../middlewares/validateRequest.js";
import { createPassengerSchema, updatePassengerSchema } from '../schemas/passengerSchema.js'

const PassengerRouter = Router()
PassengerRouter.get('/all', PassengerController.getAllPassengers);
PassengerRouter.put('/update', PassengerController.updatePassenger);
PassengerRouter.post('/create', PassengerController.createPassenger);
PassengerRouter.delete('/delete', PassengerController.deletePassenger);
PassengerRouter.get('/:id', PassengerController.getPassengerById);
export default PassengerRouter