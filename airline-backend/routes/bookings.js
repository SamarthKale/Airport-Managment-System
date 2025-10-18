const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/bookingsController');

router.post('/', ctrl.bookFlight);
router.get('/', ctrl.getBookings);

module.exports = router;
