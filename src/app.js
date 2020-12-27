/*
    first config to start app
*/

//initial server configs
const express = require('express');
const app = express();
//http response show in console info
const morgan = require('morgan');

//to enable http request 
const cors = require('cors');


app.use(express.urlencoded({
    extended: true,
    limit: '100kb'
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//app routs file
app.use(require('./routes/users'));


module.exports = app;