const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');

//Routes
route(app);

// app.use(morgan('combined')) //website response log

app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resource/views'));

app.use(express.static(path.join(__dirname, 'public/')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
