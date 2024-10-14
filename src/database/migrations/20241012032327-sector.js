'use strict';

const { DataTypes } =require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.createTable(
      'sector',
      {
        sector_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        sector_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sector_index: {
          type: Sequelize.INTEGER,
          unique: true,
          autoIncrement: true,
          allowNull: false,
        }
      },
      {
        schema: 'registry'
      }
    );
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sector', {
      schema: 'registry'
    });     
  }
};
