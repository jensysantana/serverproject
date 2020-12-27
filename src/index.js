/*
    second config to start app
*/
// require('./config/config');
const app = require('./app');

const { connect } = require('./database');

//file system and http server and https
// const fs = require('fs');
// const path = require('path');
// const http = require('http');
// const https = require('https');
// console.log(`${path.resolve()}\\sslcert\\serverkey.key`);;

// const privateKey = fs.readFileSync(`${path.resolve()}\\sslcert\\serverkey.pem`, 'utf-8');
// const certificate = fs.readFileSync(`${path.resolve()}\\sslcert\\servercert.pem`, 'utf-8');
// const credentials = {
//     key: fs.readFileSync(`${path.resolve()}\\sslcert\\serverkey.pem`, 'utf-8'),
//     cert: fs.readFileSync(`${path.resolve()}\\sslcert\\servercert.pem`, 'utf-8')
// };

async function main() {
    // const httpServer = http.createServer(app);
    // const httpsServer = https.createServer({
    //     key: fs.readFileSync(`${path.resolve()}\\sslcert\\serverkey.pem`, 'utf-8'),
    //     cert: fs.readFileSync(`${path.resolve()}\\sslcert\\servercert.pem`, 'utf-8')
    // }, app);
    // console.log('---------process.env.PORT---------');
    // console.log(process.env.LOCALPORT);
    // console.log('---------process.env.PORT---------');
    try {
        // connection db
        await connect();
        //express application.
        await app.listen(4000);
        // await httpServer.listen(process.env.PORT || 4000);
        // httpsServer.listen(process.env.httpsServer);
        // console.log('server on port 4000 Connected');
    } catch (error) {
        console.log(`server error index.js ${error}`);
    }
}

main();