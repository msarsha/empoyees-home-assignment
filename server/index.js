const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors');

const employeeRoutes = require('./employee/employee.route');

const app = express();

mongoose.connect('mongodb://localhost:27017/employees', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/employee', employeeRoutes);

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
