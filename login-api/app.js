const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db-connection');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})