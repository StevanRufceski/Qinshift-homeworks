import express from 'express';

const PORT = 3000;
const HOSTNAME = 'localhost';


const app = express();
app.use(express.json())

import taskRouter from "./routes/tasks.routes.js"
app.use('/api/tasks', taskRouter)
// -----
import { connectDB } from './config/db.js';

async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, HOSTNAME, () => {
            console.log(`Server started listening on http://${HOSTNAME}:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
}
startServer();
// ----

// app.listen(PORT, HOSTNAME, ()=>{console.log(`Server started listening on http://${HOSTNAME}:${PORT}`);})
