import {Schema, model} from 'mongoose'
const rideSchema = new Schema({
	driver: {
		type: Schema.Types.ObjectId,
		ref: 'drivers',
		required: true,
	},
	passenger: {
		type: Schema.Types.ObjectId,
		ref: 'passengers',
		required: true,
	},
	car: {
		type: Schema.Types.ObjectId,
		ref: 'cars',
		required: true,
	},
	startPosition: {
		type: String,
		required: true,
	},
	endPosition: {
		type: String,
		required: true,
	},
	km: {
		type: Number,
		min: 0,
		required: true,
	},
	income: {
		type: Number,
		min: 0,
	},
	price: {
		type: Number,
		min: 0,
		required: true,
	},
},
{
	timestamps: true,
}
);
const RideModel = model('rides', rideSchema);
export default RideModel;