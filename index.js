//Express basic server

const express = require('express');

const app = express();

/* read environment variable */
const appPort = process.env.NODEJS_PORT

app.get('/', (req, res) => {
	res.send(`Hello World! ${new Date().toISOString()}`);
});

app.listen(appPort);

console.log(`Listening simple server on port ${appPort}`);