const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/employeesController');

router.get('/', ctrl.getAllEmployees);
router.post('/', ctrl.addEmployee);
router.put('/:id', ctrl.updateEmployee);
router.delete('/:id', ctrl.deleteEmployee);

module.exports = router;
