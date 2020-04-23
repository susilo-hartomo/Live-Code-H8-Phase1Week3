'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Sabun',
        category_code: 'sbn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Susu',
        category_code: 'ss',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Snack',
        category_code: 'snk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Minyak',
        category_code: 'myk',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Categories', null, {});
  }
};
