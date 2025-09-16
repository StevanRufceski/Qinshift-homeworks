import {Schema, model} from 'mongoose'
const passengerSchema = new Schema({
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
    },
    discount:{
        type: Number,
        default: 0,
    }
},
{
    timestamps: true,
})
const PassengerModel = model('passengers', passengerSchema);
export default PassengerModel;