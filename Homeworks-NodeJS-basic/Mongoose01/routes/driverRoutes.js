import { Router } from "express";
import DriverController from "../controllers/driverControllers.js";
import ValidateRequest from "../middlewares/validateRequest.js";
import { createDriverSchema, updateDriverSchema } from "../schemas/driverSchema.js";

const DriverRouter = Router()
export default DriverRouter