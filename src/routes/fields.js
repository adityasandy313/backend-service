const router = require('express').Router();

const { fieldController } = require('../controllers');


router.route('/add')
  .post(fieldController.addFields);

router.route('/updateContent')
    .put(fieldController.updateFields)

module.exports = router