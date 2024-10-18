'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createSchema('registry');
    await queryInterface.createSchema('schedule');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropSchema('registry');
    await queryInterface.dropSchema('schedule');
  }
};
