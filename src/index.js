/*
    second config to start app
*/
const app = require('./app');

const { connect } = require('./database');




//file system and http server and https
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
console.log(`${path.resolve()}\\sslcert\\serverkey.key`);;

const privateKey = fs.readFileSync(`${path.resolve()}\\sslcert\\serverkey.pem`, 'utf-8');
const certificate = fs.readFileSync(`${path.resolve()}\\sslcert\\servercert.pem`, 'utf-8');
const credentials = {
    key: privateKey,
    cert: certificate
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);


async function main() {

    try {
        // connection db
        await connect();
        //express application.
        // await app.listen(4000);
        await httpServer.listen(4000);
        httpsServer.listen(3443);





        console.log('server on port 4000 Connected');

    } catch (error) {
        console.log(`server error ${error}`);
    }

}

main();