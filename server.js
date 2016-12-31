const express = require('express');
const http = require('http');
const morgan = require('morgan'); //Logging
const bodyParser = require('body-parser');

const app = express();
const router = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:auth/todo');

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
router(app);
//Server setup
const PORT = 8090;
const server = http.createServer(app);
server.listen(PORT);
console.log('listening on port: ', PORT);
