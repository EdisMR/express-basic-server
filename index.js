//Express basic server

const express = require('express');

const app = express();

/* read environment variable */
const appPort = process.env.NODEJS_PORT

app.get('/', (req, res) => {
	const message=`<html><body><style>html{background-color:#222932;color:ccc;}</style>Hello World! ${new Date().toISOString()}</body></html>`;
	res.send(message);
});

app.listen(appPort);

console.log(`Listening simple server on port ${appPort}`);
