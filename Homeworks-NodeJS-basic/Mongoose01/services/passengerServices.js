import PassengerModel from '../models/passengerModel.js';
const PassengerServices = {
    async getAllPassengers () {
        const allPassengers = await PassengerModel.find();
        return allPassengers
    },
    async updatePassenger (id, body) {
        if ((!body.totalKm)&&(!body.totalIncome)){
            const updatedPassenger = await PassengerModel.findByIdAndUpdate(id, body, {
                new: true,
                runValidators: true,
                
            })
            return updatedPassenger
        } else{
            return "Passenger's total km an total income, can not be changed."
        }
    },
    async createPassenger (body){
        const {userName, discount} = body;
        let totalKm = 0;
        let totalIncome = 0;
        const newPassenger = new PassengerModel({
            userName,
            totalKm,
            totalIncome,
            discount,
        });
        const createdPassenger = await newPassenger.save();
        return createdPassenger;
    },
    async deletePassenger (id) {
        await PassengerModel.findByIdAndDelete(id)
        return `Passenger with ${id} was deleted.`
    },
        async getPassengerById(id) {
            const passengerDetails = await PassengerModel.findById(id);
            return passengerDetails;
        },
};
export default PassengerServices;