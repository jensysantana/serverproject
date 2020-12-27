/*
    3th config to start app


    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://satana:<password>@project-users.jxttd.mongodb.net/<dbname>?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
    });


    mongodb+srv://satana:<password>@project-users.jxttd.mongodb.net/<dbname>?retryWrites=true&w=majority
*/
const mongoose = require('mongoose');

async function connect() {

    // const urldb = process.env.BACKENDURL || process.env.PORT;        process.env.BACKENDLOCALURL || 

    const urlDb = 'mongodb+srv://satana:RyUUyGXJXpApSAEz@project-users.jxttd.mongodb.net/fakerusersflutter?retryWrites=true&w=majority';
    // 'mongodb://localhost:27017/fakerusersflutter'
    await mongoose.connect(urlDb, {
        // dbName: 'fakerusersflutter',
        // useFindAndModify: false,
        // useCreateIndex: true,
        useNewUrlParser: true, //para que no muestre advertencia o error por pantalla.
        useUnifiedTopology: true
    });

    console.log('Database connected');
}

module.exports = { connect };