import {Schema, model} from 'mongoose'
const passengerSchema = new Schema({
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
    },
    discount:{
        type: Number,
        default: 0,
    }
})
const passengerModel = model('passengers', passengerSchema);
export default passengerModel;