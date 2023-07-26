const { entryService } = require('../services');

const addEntry = async (req, res) => {
  try {
    const { conten_id, entries } = req.body;
    const addedEntry = await entryService.addEntry(conten_id, entries);
    res.status(201).json({
      data: addedEntry
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {addEntry};