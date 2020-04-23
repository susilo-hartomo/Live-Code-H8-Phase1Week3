'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Product extends Model {

  }

  Product.init({
    name: {
      notEmpty: true,
      type: DataTypes.STRING
    },
    sku: {
      notEmpty: true,
      type: DataTypes.STRING
    },
    quantity: {
      notEmpty: true,
      type: DataTypes.INTEGER,
      validate: {
        isQuantity(value) {
          if (value < 1) {
            throw new Error('quantity harus lebih dari 0');
          }
        }
      }
    },
    price: {
      notEmpty: true,
      type: DataTypes.INTEGER,
      validate: {
        isPrice(value) {
          if (value < 1) {
            throw new Error('price harus lebih dari 0');
          }
        }
      }
    },
    is_discontinued: {
      notEmpty: true,
      type: DataTypes.BOOLEAN
    },
    CategoryId: {
      notEmpty: true,
      type: DataTypes.INTEGER
    }
  }, {
    hooks: {
      beforeCreate: (product, options) => {
        let code_category = null
        switch (product.CategoryId) {
          case '1':
            code_category = 'sbn'
            break;
          case '2':
            code_category = 'ss'
            break;
          case '3':
            code_category = 'snk'
            break;
          case '4':
            code_category = 'myk'
            break;
          default:

            break;
        }
        product.is_discontinued = false
        product.sku = code_category + "_" + product.name.replace(' ', '_')
      }
    }, sequelize
  });
  Product.associate = function (models) {
    // associations can be defined here
    Product.belongsTo(models.Category)
  };
  return Product;
};