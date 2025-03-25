import {Schema, model} from 'mongoose'
const driverSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    totalKm: {
        type: Number,
        min: 0,
        required: true,
    },
    totalIncome: {
        type: Number,
        min: 0,
        required: true,
    }
})
const driverModel = model('drivers', driverSchema);
export default driverModel;