'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Content.belongsTo(models.Collection, {
       foreignKey: 'collection_id'
       });
       Content.hasMany(models.Entry, {
        foreignKey: 'conten_id'
       })
      // define association here
    }
  }
  Content.init({
    collection_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    field: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};