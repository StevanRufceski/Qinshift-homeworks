import express from 'express';

import bookRouter from './routes/books.routes.js';
const app = express();

const PORT = 3000;
const HOSTNAME = 'localhost';


app.use(express.json());

app.use('/api/books', bookRouter);   // treba megju praznite '' da stoi /api/books koga se raboti so public frontend

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server started listening on: http://${HOSTNAME}:${PORT}`);
});

