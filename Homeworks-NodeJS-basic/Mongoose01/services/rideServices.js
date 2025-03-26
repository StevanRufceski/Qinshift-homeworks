import RideModel from '../models/rideModel.js';
import DriverModel from '../models/driverModel.js';
import PassengerModel from '../models/passengerModel.js';
import CarModel from '../models/carModel.js';
const RideServices = {
    async getAllRides (){
        const allRides = await RideModel.find();
        return allRides
    },
    async createRide (){
        const {driverId, passengerId, carId, startPosition, endPosition, km, price} = body; // income kje bide interna presmetka spored discount
        const theDriver = await DriverModel.findById({
            id: driverId,
        });
        const thePassenger = await PassengerModel.findById({
            id: passengerId,
        });
        const theCar = await CarModel.findById({
            id: carId,
        });
        const discountedPrice = price*(1-thePassenger.discount);
        const newDriverTotalKm = theDriver.totalKm + km;
        const newDriverTotalIncome = theDriver.totalIncome + discountedPrice;
        const driverUpdate = `{
            "totalKm = "${newDriverTotalKm}"
            "totalIncome = "${newDriverTotalIncome}"
        }`
        const newPassengerTotalKm = thePassenger.totalKm + km;
        const newPassengerTotalIncome = thePassenger.totalIncome + discountedPrice;
        const passengerUpdate = `{
            "totalKm = "${newPassengerTotalKm}"
            "totalIncome = "${newPassengerTotalIncome}"
        }`
        const newCarTotalKm = theCar.totalKm + km;
        const newCarTotalIncome = theCar.totalIncome + discountedPrice;
        const carUpdate = `{
            "totalKm = "${newCarTotalKm}"
            "totalIncome = "${newCarTotalIncome}"
        }`
        DriverModel.updateDriver (driverId, driverUpdate);
        PassengerModel.updatePassenger (passengerId, passengerUpdate);
        CarModel.updateCar (carId, carUpdate)
        const newRide = new RideModel({
            driver: driverId,
            passenger: passengerId,
            car: carId,
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
        const theDriverId = theRide.driverId;
        const thePassengerId = theRide.passengerId;
        const theCarId = theRide.CarId;

        const theDriver = await DriverModel.findById(theDriverId);
        const thePassenger = await PassengerModel.findById(thePassengerId);
        const theCar = await CarModel.findById(theCarId);

        const discountedPrice = price*(1-thePassenger.discount);
        const newDriverTotalKm = theDriver.totalKm - theRide.km;
        const newDriverTotalIncome = theDriver.totalIncome - theRide.income;
        const driverUpdate = `{
            "totalKm = "${newDriverTotalKm}"
            "totalIncome = "${newDriverTotalIncome}"
        }`
        const newPassengerTotalKm = thePassenger.totalKm - theRide.km;
        const newPassengerTotalIncome = thePassenger.totalIncome - theRide.income;
        const passengerUpdate = `{
            "totalKm = "${newPassengerTotalKm}"
            "totalIncome = "${newPassengerTotalIncome}"
        }`
        const newCarTotalKm = theCar.totalKm - theRide.km;
        const newCarTotalIncome = theCar.totalIncome - theRide.income;
        const carUpdate = `{
            "totalKm = "${newCarTotalKm}"
            "totalIncome = "${newCarTotalIncome}"
        }`
        DriverModel.updateDriver (driverId, driverUpdate);
        PassengerModel.updatePassenger (passengerId, passengerUpdate);
        CarModel.updateCar (carId, carUpdate)
        await RideModel.findByIdAndDelete(id)
        return `Ride with ${id} was deleted.`
    },
    async getRideById(id) {
        const rideDetails = await RideModel.findById(id).populate(['driver', 'passenger','car']);
        return rideDetails;
    },
};
export default RideServices;