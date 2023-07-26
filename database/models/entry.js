'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entry.belongsTo(models.Content, { foreignKey: 'conten_id' });
    }
  }
  Entry.init({
    conten_id: DataTypes.INTEGER,
    entries: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};