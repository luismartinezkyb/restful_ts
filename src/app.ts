import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import {router} from './routes/'
import {dbConnect} from './config/mongo';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(router);
dbConnect().then(() => console.log('Coneccion is running'))

app.listen(PORT, ()=>console.log(`app listening on ${PORT}`))
