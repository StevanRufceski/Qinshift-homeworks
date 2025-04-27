import RideServices from "../services/rideServices.js";
const RideController = {
    async getAllRides (req, res){
        const allRides = await RideServices.getAllRides();
        res.send(allRides);
    },
    async createRide(req, res) {
        try {
            const newRide = await RideServices.createRide(req.body);
            res.status(201).send(newRide);
        } catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async deleteRide(req, res){ // ova e ok
        try{
            await RideServices.deleteRide(req.params.id);
            res.sendStatus(204)
        }catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async getRideById(req, res) {
        try {
            const rideDetails = await RideServices.getRideById(req.params.id);
            res.send(rideDetails);
        } catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
}
export default RideController