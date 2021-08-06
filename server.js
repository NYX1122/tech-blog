const path = require('path');
const sequelize = require('./config/connection');
const express = require('express');
const routes = require('./controllers');
const session = require('express-session');
require('dotenv').config();

const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const SequelizeStore = require('connect-session-sequelize')(session.store);
const sess = {
    secret: process.env.secret,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});