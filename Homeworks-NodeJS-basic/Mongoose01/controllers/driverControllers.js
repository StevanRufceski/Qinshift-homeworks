import DriverServices from '../services/driverServices.js'
const DriverController = {
    async getAllDrivers (req, res){
        const allDrivers = await DriverServices.getAllDrivers();
        res.send(allDrivers);
    },
    async updateDriver(req, res) {
        try {
            const updatedDriver = await DriverServices.updateDriver(
                req.params.id,
                req.body
            );
            res.send(updatedDriver);
        } catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async createDriver(req, res) {
        try {
            const newDriver = await DriverServices.createDriver(req.body);
            res.status(201).send(newDriver);
        } catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async deleteDriver(req, res){ // ova e ok
        try{
            await DriverServices.deleteDriver(req.params.id);
            res.sendStatus(204)
        }catch (error) {
            res.status(500).send({
                errors: [error.message],
            });
        }
    },
    async getDriverById(req, res) {
		try {
			const driverDetails = await DriverServices.getDriverById(req.params.id);
			res.send(driverDetails);
		} catch (error) {
			res.status(500).send({
				errors: [error.message],
			});
		}
	},
}
export default DriverController