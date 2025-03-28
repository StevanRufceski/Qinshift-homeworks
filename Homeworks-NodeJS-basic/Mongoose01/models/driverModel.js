import {Schema, model} from 'mongoose'
const driverSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    totalKm: {
        type: Number,
        min: 0,
    },
    totalIncome: {
        type: Number,
        min: 0,
    }
},
{
    timestamps: true,
})
const DriverModel = model('drivers', driverSchema);
export default DriverModel;