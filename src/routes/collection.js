const router = require('express').Router();

const { collectionController } = require('../controllers');

router.route('/add')
  .post(collectionController.addCollection);

router.route('/getCollection')
 .get(collectionController.getAllCollection);

router.route('/getCollectionId/:collectionId')
   .get(collectionController.getCollectionById);

router.route('/updateCollection')
    .put(collectionController.updateCollectionName)

module.exports = router