const router = require('express').Router();
const fieldRoute = require('./fields');
const entryRoute = require('./entry');
const collectionRoute = require('./collection');

router.use('/field',fieldRoute);
router.use('/entry',entryRoute);
router.use('/collection',collectionRoute);


module.exports = router;