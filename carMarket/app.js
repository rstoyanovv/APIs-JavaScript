import express from 'express';
import hbs from 'express-handlebars'
import { home } from './contollers/home.js'

const port = 3000;
const app = express();

app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.get('/', home);

app.listen(port, () => console.log(`Server listenig on port ${port}`));