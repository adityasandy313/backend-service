const { Collection, Content, Entry} = require('../../database/models');

const addFields = async (collection_id,name,field) => {
  const newFields = await Content.create({ collection_id,name,field});
  return newFields;
};
const updateFields = async({collection_id, id, field}) => {
    const collection = await Collection.findByPk(collection_id);
    if (collection) {
      const content = await Content.findOne({
        where: {
          id: id,
          collectionId: collection_id,
        },
      });
      if (content) {
        const updatedContent = await Content.update(field,{
          where: {
          id: id,
          collection_id: collection_id,
        },
      })
      return updatedContent;
      }
    }
    else {
      throw error('Collection not found');
    }
}
module.exports = {addFields, updateFields}