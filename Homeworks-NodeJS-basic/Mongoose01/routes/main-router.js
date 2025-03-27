import {Router} from 'express';
import DriverRouter from './driverRoutes.js';
import PassengerRouter from './passengerRoutes.js';
import CarRouter from './carRoutes.js';
import RideRouter from './rideRoutes.js';

const MainRouter = Router();
MainRouter.use('/drivers', DriverRouter);
MainRouter.use('/passengers', PassengerRouter);
MainRouter.use('/cars', CarRouter);
MainRouter.use('/rides', RideRouter);
export default MainRouter