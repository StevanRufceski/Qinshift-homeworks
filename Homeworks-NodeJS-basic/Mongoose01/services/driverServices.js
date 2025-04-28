import DriverModel from '../models/driverModel.js';
const DriverServices = {
    async getAllDrivers (){
        const allDrivers = await DriverModel.find();
        return allDrivers;
    },
    async updateDriver (id, body) {
        if ((!body.totalKm)&&(!body.totalIncome)){
            const updatedDriver = await DriverModel.findByIdAndUpdate(id, body, {
                new: true,
                runValidators: true,
                
            })
            return updatedDriver
        } else{
            return "Driver's total km an total income, can not be changed."
        }
    },
    async createDriver (body) {
        const {userName} = body;
        let totalKm = 0;
        let totalIncome = 0;
        const newDriver = new DriverModel({
            userName,
            totalKm,
            totalIncome,
        });
        const createdDriver = await newDriver.save();
        return createdDriver;
    },
    async deleteDriver (id) {
        await DriverModel.findByIdAndDelete(id)
        return `Driver with ${id} was deleted.`
    },
    async getDriverById(id) {
        const driverDetails = await DriverModel.findById(id);
        if (!driverDetails) {
            throw new Error('Driver not found');
        }
        return driverDetails;
    },
};
export default DriverServices;

