import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import container from './container.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres Login API' })
});

//Routes
const userRouter = container.resolve('UserRouter');

app.use('/api/users', userRouter.router);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})