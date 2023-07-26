const router = require('express').Router();

const { entryController } = require('../controllers');


router.route('/add')
  .post(entryController.addEntry);

module.exports = router