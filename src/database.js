/*
    3th config to start app
*/
const mongoose = require('mongoose');
require('./config/config');

async function connect() {

    const urldb = process.env.BACKENDURL || process.env.BACKENDLOCALURL;
    await mongoose.connect(urldb, {
        // dbName: 'fakerusersflutter',
        // useFindAndModify: false,
        // useCreateIndex: true,
        useNewUrlParser: true, //para que no muestre advertencia o error por pantalla.
        useUnifiedTopology: true
    });

    console.log('Database connected');
}

module.exports = { connect };