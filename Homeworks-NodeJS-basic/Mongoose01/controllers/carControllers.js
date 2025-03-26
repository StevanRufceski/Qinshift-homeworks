import CarServices from "../services/carServices.js";
const CarController = {
    async getAllCars (req, res){
        const allCars = await CarServices.getAllCars();
        res.send(allCars);
    },
    async updateCar(req, res) {
        try {
            const updatedCar = await CarServices.updateCar(
                req.params.id,
                req.body
            );
            res.send(updatedCar);
        } catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async createCar(req, res) {
        try {
            const newCar = await PassengerServices.createPassenger(req.body);
            res.status(201).send(newCar);
        } catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async deleteCar(req, res){ // ova e ok
        try{
            await CarServices.deleteCar(req.params.id);
            res.sendStatus(204)
        }catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async getCarById(req, res) {
        try {
            const carDetails = await CarServices.getCarById(req.params.id);
            res.send(carDetails);
        } catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
}
export default CarController