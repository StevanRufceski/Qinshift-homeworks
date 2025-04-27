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
    },
    totalIncome: {
        type: Number,
        min: 0,
    },
},
{
    timestamps: true,
})
const CarModel = model('cars', carSchema);
export default CarModel;