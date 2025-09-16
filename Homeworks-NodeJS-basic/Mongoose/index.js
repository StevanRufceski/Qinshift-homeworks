import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());

import router from './routes/recipeRoutes.js'

app.use('/api', router);

dotenv.config();

const {
    MONGO_CLUSTER,
    MONGO_DB_NAME,
    MONGO_PASSWORD,
    MONGO_USERNAME,
    PORT,
    HOSTNAME,
} = process.env;
const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;


async function init() {

    await mongoose.connect(URI);

    app.listen(PORT, HOSTNAME, () => {
        console.log(`Server started listening on http://${HOSTNAME}:${PORT}`);
    });
}

init();