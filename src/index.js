const express = require('express');
var hbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const route = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'src/public')));

//http logger
app.use(morgan('combined'));

//template-engine
app.engine(
    'hbs',
    hbs.engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

route(app);

app.listen(3000);
