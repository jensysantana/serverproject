/*
    3th config to start app
*/

const mongoose = require('mongoose');

async function connect() {

    await mongoose.connect('mongodb://localhost:27017/fakerusersflutter', {
        // dbName: 'fakerusersflutter',
        // useFindAndModify: false,
        // useCreateIndex: true,
        useNewUrlParser: true, //para que no muestre advertencia o error por pantalla.
        useUnifiedTopology: true
    });

    console.log('Database connected');
}

module.exports = { connect };