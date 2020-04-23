'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Category extends Model {

  }

  Category.init({
    name: DataTypes.STRING,
    category_code: DataTypes.STRING
  }, { sequelize });
  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Product)
  };
  return Category;
};