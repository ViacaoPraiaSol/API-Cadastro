'use strict';

const { DataTypes } =require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'vehicle_type',
      {
        type_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        type_index: {
          type: Sequelize.INTEGER,
          unique: true,
          autoIncrement: true,
          allowNull: false,
        },
        type_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        class: {
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
    await queryInterface.dropTable('vehicle_type')
  }
};
