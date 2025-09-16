import mongoose from 'mongoose';
import RideModel from '../models/rideModel.js';
import DriverModel from '../models/driverModel.js';
import PassengerModel from '../models/passengerModel.js';
import CarModel from '../models/carModel.js';
const RideServices = {
    async getAllRides (){
        const allRides = await RideModel.find();
        return allRides
    },
    async createRide (body){
        const {driverId, passengerId, carId, startPosition, endPosition, km, price} = body; // income kje bide interna presmetka spored discount
        const theDriver = await DriverModel.findById(
            new mongoose.Types.ObjectId(driverId),
        );
        if (!theDriver) {
            throw new Error('Driver not found');
        }
        const thePassenger = await PassengerModel.findById(
            new mongoose.Types.ObjectId(passengerId),
        );
        if (!thePassenger) {
            throw new Error('Passenger not found');
        }
        const theCar = await CarModel.findById(
            new mongoose.Types.ObjectId(carId),
        );
        if (!theCar) {
            throw new Error('Car not found');
        }
        const discountedPrice = price*(1-thePassenger.discount/100);
        const newDriverTotalKm = theDriver.totalKm + Number(km);
        const newDriverTotalIncome = theDriver.totalIncome + discountedPrice;
        const driverUpdateBody = {
            totalKm: newDriverTotalKm,
            totalIncome: newDriverTotalIncome,
        };
        const newPassengerTotalKm = thePassenger.totalKm + km;
        const newPassengerTotalIncome = thePassenger.totalIncome + discountedPrice;
        const passengerUpdateBody = {
            totalKm: newPassengerTotalKm,
            totalIncome: newPassengerTotalIncome,
        }
        const newCarTotalKm = theCar.totalKm + km;
        const newCarTotalIncome = theCar.totalIncome + discountedPrice;
        const carUpdateBody = {
            totalKm: newCarTotalKm,
            totalIncome: newCarTotalIncome,
        }
        await DriverModel.findByIdAndUpdate(driverId, driverUpdateBody, { new: true });
        await PassengerModel.findByIdAndUpdate(passengerId, passengerUpdateBody, { new: true });
        await CarModel.findByIdAndUpdate(carId, carUpdateBody, { new: true });
        const newRide = new RideModel({
            driver: new mongoose.Types.ObjectId(driverId),
            passenger: new mongoose.Types.ObjectId(passengerId),
            car: new mongoose.Types.ObjectId(carId),
            startPosition,
            endPosition,
            km,
            price,
            income: discountedPrice,
        })
        const createdRide = await newRide.save();
        return createdRide;
    },
    async deleteRide (id) {
        const theRide = await RideModel.findById(id);
        if (!theRide) {
            throw new Error('Ride not found');
        }
        const theDriverId = theRide.driver;
        const thePassengerId = theRide.passenger;
        const theCarId = theRide.car;
        const theDriver = await DriverModel.findById(theDriverId);
        if (!theDriver) {
            throw new Error('Driver not found');
        }
        const thePassenger = await PassengerModel.findById(thePassengerId);
        if (!thePassenger) {
            throw new Error('Passenger not found');
        }
        const theCar = await CarModel.findById(theCarId);
        if (!theCar) {
            throw new Error('Car not found');
        }
        const newDriverTotalKm = theDriver.totalKm - theRide.km;
        const newDriverTotalIncome = theDriver.totalIncome - theRide.income;
        const driverUpdateBody = {
            totalKm: newDriverTotalKm,
            totalIncome: newDriverTotalIncome,
        };
        const newPassengerTotalKm = thePassenger.totalKm - theRide.km;
        const newPassengerTotalIncome = thePassenger.totalIncome - theRide.income;
        const passengerUpdateBody = {
            totalKm: newPassengerTotalKm,
            totalIncome: newPassengerTotalIncome,
        }
        const newCarTotalKm = theCar.totalKm - theRide.km;
        const newCarTotalIncome = theCar.totalIncome - theRide.income;
        const carUpdateBody = {
            totalKm: newCarTotalKm,
            totalIncome: newCarTotalIncome,
        }
        await DriverModel.findByIdAndUpdate(theDriverId, driverUpdateBody, { new: true });
        await PassengerModel.findByIdAndUpdate(thePassengerId, passengerUpdateBody, { new: true });
        await CarModel.findByIdAndUpdate(theCarId, carUpdateBody, { new: true });
        await RideModel.findByIdAndDelete(id)
    },
    async getRideById(id) {
        const theRide = await RideModel.findById(id);
        if (!theRide) {
            throw new Error('Ride not found');
        }
        const rideDetails = theRide.populate(['driver', 'passenger','car']);
        return rideDetails;
    },
};
export default RideServices;