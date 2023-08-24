import express from 'express';
import bodyParser from 'body-parser';
import * as logic from './index.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres Login API' })
});

app.get('/users', logic.getUsers);
app.get('/users/:id', logic.getUserById);
app.post('/users', logic.createUser);
app.put('/users/:id', logic.updateUser);
app.post('/authenticate', logic.authenticateUser);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})