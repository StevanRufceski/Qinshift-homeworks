import express from 'express';

const PORT = 3000;
const HOSTNAME = 'localhost';

const app = express();
app.use(express.json());

import router from './routes/recipeRoutes.js'
import { connectDB } from './config/db.config.js';

app.use('/api', router);

async function startServer (){
    try{
        await connectDB();
        app.listen(PORT, HOSTNAME, () => {console.log(`Server started listening on http://${HOSTNAME}:${PORT}`);});
    }
    catch (error) {
        console.error('Failed to start server:', error);
    }
}
startServer();

