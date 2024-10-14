'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable(
    'clearance_level',
    {
      level_id: {
        type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
      },
      level_name: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    },
    {
      schema: 'registry'
    }
   )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clearance_level', {
      schema: 'registry'
    })
  }
};
