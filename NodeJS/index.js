const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var {mongoose} = require('./db.js');

const mongoose1 = require("mongoose")
mongoose1.set('debug', true);
mongoose1.set('useFindAndModify', false);

var employeeController = require('./controllers/employeeController.js');

var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(9000, () => console.log('SERVER STARTED...'));

app.use('/employees', employeeController);