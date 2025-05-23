import express from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
import MainRouter from './routes/main-router.js'

dotenv.config();
const {PORT, HOSTNAME, MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DB_NAME} = process.env;
const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
app.use(express.json())
app.use('/api', MainRouter)
// ( async () => {
//     try {
//         await mongoose.connect(URI);
//     } catch (error){
//         console.log(`Connection to MongoDB failed!`, error)
//     }
//     app.listen(PORT, HOSTNAME, ()=>{
//         console.log(`Server started listening on http://${HOSTNAME}:${PORT}`)
//     });
// })();
async function init() {
    try {
        await mongoose.connect(URI);
    } catch (error){
        console.log(`Connection to MongoDB failed!`, error)
    }
    app.listen(PORT, HOSTNAME, () => {
        console.log(`Server started listening on http://${HOSTNAME}:${PORT}`);
    });
}
init();