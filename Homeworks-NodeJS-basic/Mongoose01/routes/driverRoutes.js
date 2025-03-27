import { Router } from "express";
import DriverController from "../controllers/driverControllers.js";
import ValidateRequest from "../middlewares/validateRequest.js";
import { createDriverSchema, updateDriverSchema } from "../schemas/driverSchema.js";

const DriverRouter = Router()
DriverRouter.get('/all', DriverController.getAllDrivers);
DriverRouter.put('/update/:id', DriverController.updateDriver);
DriverRouter.post('/create', DriverController.createDriver);
DriverRouter.delete('/delete/:id', DriverController.deleteDriver);
DriverRouter.get('/:id', DriverController.getDriverById);
export default DriverRouter