const Employee = require('./employee.model');

const getAll = async (req, res) => {
	const employees = await Employee.find();
	res.json(employees);
};

const remove = async (req, res) => {
	const removeRes = await Employee.findOneAndDelete({_id: req.params.id});
	res.json(removeRes);
};

const getById = async (req, res) => {
	const employee = await Employee.findById(req.params.id);
	res.json(employee);
};

const update = async (req, res) => {
	const updated = await Employee.findOneAndUpdate({_id: req.params.id}, req.body);
	res.json(updated);
};

const create = async (req, res) => {
	const employee = new Employee(req.body);
	const createdEmployee = await employee.save();
	res.json(createdEmployee);
};

module.exports = {
	getAll,
	remove,
	getById,
	update,
	create
};
