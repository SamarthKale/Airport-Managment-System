const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/logsController');

router.get('/transactions', ctrl.getTransactionLogs);
router.get('/system', ctrl.getSystemLogs);

module.exports = router;
