const express = require('express');
const router = express.Router();
const ctrl = require('./employee.ctrl');

router.route('/')
		.get(ctrl.getAll)
		.post(ctrl.create);

router.route('/:id')
		.get(ctrl.getById)
		.put(ctrl.update)
		.delete(ctrl.remove);


module.exports = router;
