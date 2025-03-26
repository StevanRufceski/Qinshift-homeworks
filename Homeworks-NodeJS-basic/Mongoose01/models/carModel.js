import {Schema, model} from 'mongoose'
const carSchema = new Schema({
    licensePlate: {
        type: String,
        required: true,
        unique: true,
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
},
{
    timestamps: true,
})
const CarModel = model('cars', carSchema);
export default CarModel;