const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/departmentsController');

router.get('/', ctrl.getDepartments);
router.post('/', ctrl.addDepartment);
router.delete('/:id', ctrl.deleteDepartment);

module.exports = router;
