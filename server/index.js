import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './mongodb/connect.js'
// import postRoutes from './routes/postRoutes.js';
// import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use((err, req, res, next) => {
  console.log('error: '+ err.message)
  res.status(500).send({ message: err.message+ 'from SERVER' })
});

// app.use('/api/v1/post', postRoutes)
// app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
  res.send('Hello from server');
});

// MONGO_CONNECTION
const startServer =async () => {
    try {
        connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT : ${PORT}`)
        })
    } catch (error) {
        console.log(`Failed to connect to MongoDB: ${error.message}`)
  };
}
startServer()
 
