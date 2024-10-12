'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createSchema('registry')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropSchema('registry')
  }
};
