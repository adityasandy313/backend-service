const { collectionService } = require('../services');

const addCollection = async (req, res) => {
  try {
    const { name } = req.body;
    const addedCollection = await collectionService.addCollection(name);
    res.status(201).json({
      data: addedCollection
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getAllCollection = async(req,res) => {
  try {
        const allCollections = await collectionService.getAllCollection();
        res.status(201).json({
          data: allCollections
        })
  }
  catch(error) {
       res.status(500).json({
        error: error.message
       })
  }
}
const getCollectionById = async(req,res) => {
  try {
         const collectionId = req.params.collectionId; 
         const getCollection = await collectionService.getCollectionById(collectionId);
          res.status(201).json({
          data: getCollection
        })
  }
  catch(error) {
    res.status(500).json({
      error: error.message
    })
  }
}
const updateCollectionName = async(req,res) => {
  try {
        const updatedData = await collectionService.updateCollectionName({...req.body});
         res.status(201).json({
          data: updatedData
        })
  }
  catch(error) {
     res.status(500).json({
      error: error.message
    })
  }
}

module.exports = {addCollection,getAllCollection,getCollectionById,updateCollectionName};