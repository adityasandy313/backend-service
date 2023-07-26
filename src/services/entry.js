const {Entry} = require('../../database/models');

const addEntry = async(conten_id, entries)=>{
   const newEntry = await Entry.create({ conten_id, entries});
    return newEntry;
}

module.exports = {addEntry};

