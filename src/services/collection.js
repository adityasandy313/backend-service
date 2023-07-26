const { Collection, Content, Entry} = require('../../database/models');

const addCollection = async (name) => {
  const newCollection = await Collection.create({ name });
  return newCollection;
};
const getAllCollection = async()=>{
  const allCollection = await Collection.findAll({
      include: [
        {
          model: Content,
          include: [Entry],
        },
      ],
    });
  return allCollection
}
const getCollectionById = async(collectionId)=>{
  const collectionById = await Collection.findByPk(collectionId,{
      include: [
        {
          model: Content,
          include: [
            {
            model: Entry,
            }
          ],
        },
      ],
    });
  return collectionById;
}
const updateCollectionName = async({id, name}) =>{
  const collection = await Collection.findByPk(id);

    if (collection) {
      collection.name = name;
      await collection.save();
    }
    else
    {
      throw error('Collection not found');
    }
}

module.exports = {addCollection,getAllCollection,getCollectionById,updateCollectionName}