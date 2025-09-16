import { MongoClient } from 'mongodb';

const MONGO_USERNAME = 'stevanrufceski';
const MONGO_PASSWORD = 'stevanrufceski';
const MONGO_CLUSTER = 'cluster0.qove7';
const MONGO_DB_NAME = 'tasks-app';

const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

let db = null;

export async function connectDB() {
	try {
		const connection = await client.connect();
		db = connection.db();
		console.log('Connected with Mongo DB successfully');
	} catch (error) {
		console.log('MongoDB connection error: ', error);
	}
}

export function getDB() {
	if (!db) {
		console.error('Database not initialized!');
	}
	return db;
}
