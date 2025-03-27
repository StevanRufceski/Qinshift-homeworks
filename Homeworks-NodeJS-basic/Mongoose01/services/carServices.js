import CarModel from '../models/carModel.js';
const CarServices = {
    async getAllCars (){
        const allCars = await CarModel.find();
        return allCars
    },
    async updateCar (id, body) {
        if ((!body.totalKm)&&(!body.totalIncome)){
            const updatedCar = await CarModel.findByIdAndUpdate(id, body, {
                new: true,
                runValidators: true,
                
            })
            return updatedCar
        } else{
            return "Car's total km an total income, can not be changed."
        }
    },
    async createCar (body){
        const {licensePlate} = body;
        let totalKm = 0;
        let totalIncome = 0;
        const newCar = new CarModel({
            licensePlate,
            totalKm,
            totalIncome,
        })
        const createdCar = newCar.save();
        return createdCar
    },
    async deleteCar (id) {
        await CarModel.findByIdAndDelete(id)
        return `Car with ${id} was deleted.`
    },
    async getCarById(id) {
		const carDetails = await CarModel.findById(id);
        if (!carDetails) {
            throw new Error('Car not found');
        }
		return carDetails;
	},
};
export default CarServices;