const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/rolesController');

router.get('/', ctrl.getAllRoles);
router.post('/', ctrl.addRole);
router.delete('/:id', ctrl.deleteRole);

module.exports = router;
