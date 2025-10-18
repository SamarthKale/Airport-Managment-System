const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/flightsController');

router.get('/', ctrl.getAllFlights);
router.post('/', ctrl.addFlight);
router.put('/:id', ctrl.updateFlight);
router.delete('/:id', ctrl.deleteFlight);

module.exports = router;
