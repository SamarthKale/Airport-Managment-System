const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/passengersController');

router.get('/', ctrl.getAllPassengers);
router.post('/', ctrl.addPassenger);
router.put('/:id', ctrl.updatePassenger);
router.put('/:id/add-money', ctrl.addMoney);
router.delete('/:id', ctrl.deletePassenger);

module.exports = router;
