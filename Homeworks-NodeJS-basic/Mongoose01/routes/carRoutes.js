import { Router } from "express";
import CarController from "../controllers/carControllers.js";
import ValidateRequest from "../middlewares/validateRequest.js";
import { createCarSchema, updateCarSchema } from '../schemas/carSchema.js'

const CarRouter = Router()
CarRouter.get('/all', CarController.getAllCars);
CarRouter.put('/update', CarController.updateCar);
CarRouter.post('/create', CarController.createCar);
CarRouter.delete('/delete', CarController.deleteCar);
CarRouter.get('/:id', CarController.getCarById);
export default CarRouter