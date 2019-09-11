const mongoose = require('mongoose');

const employeeScheme = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Employee', employeeScheme);
