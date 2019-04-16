const express = require('express');
const router = express.Router();
const ctrl = require('./monitor.ctrl');

router.get('/event/:contractAddress/:eventName/:fromBlock/:toBlock', ctrl.getPastEvents);
router.get('/event/:contractAddress', ctrl.startTransferTracking);

module.exports = router;
