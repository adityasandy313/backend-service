const { fieldService } = require('../services');

const addFields = async (req, res) => {
  try {
    const { collection_id, name, field } = req.body;
    const addedFields = await fieldService.addFields(collection_id,name, field);
    res.status(201).json({
      data: addedFields
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const updateFields = async(req,res) => {
  try {
        const updatedData = await fieldService.updateFields({...req.body});
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
module.exports = {addFields, updateFields};