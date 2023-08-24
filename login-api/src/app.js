import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRouter.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres Login API' })
});

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})