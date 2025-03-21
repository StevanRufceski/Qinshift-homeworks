import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

import router from './routes/recipeRoutes.js'

app.use('/api', router);

const PORT = 3000;
const HOSTNAME = 'localhost';
const MONGO_USERNAME = 'stevanrufceski';
const MONGO_PASSWORD = 'stevanrufceski';
const MONGO_CLUSTER = 'cluster0.qove7';
const MONGO_DB_NAME = 'recipes-app';

async function init() {
    const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(URI);

    app.listen(PORT, HOSTNAME, () => {
        console.log(`Server started listening on http://${HOSTNAME}:${PORT}`);
    });
}

init();