import PassengerServices from "../services/passengerServices.js";
const PassengerController = {
    async getAllPassengers (req, res) {
        const allPassengers = await PassengerServices.getAllPassengers()
        res.send(allPassengers);
    },
    async updatePassenger(req, res) {
        try {
            const updatedPassenger = await PassengerServices.updatePassenger(
                req.params.id,
                req.body
            );
            res.send(updatedPassenger);
        } catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async createPassenger(req, res) {
        try {
            const newPassenger = await PassengerServices.createPassenger(req.body);
            res.status(201).send(newPassenger);
        } catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async deletePassenger(req, res){ // ova e ok
        try{
            await PassengerServices.deletePassenger(req.params.id);
            res.sendStatus(204)
        }catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async getPassengerById(req, res) {
        try {
            const passengerDetails = await PassengerServices.getPassengerById(req.params.id);
            res.send(passengerDetails);
        } catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
}
export default PassengerController