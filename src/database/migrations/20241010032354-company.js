'use strict';

const { DataTypes } =require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'company', 
      {
        company_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        company_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        alias: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company_index: {
          type: Sequelize.STRING,
          //unique: true,
          //autoIncrement: true,
          allowNull: false,
        },
        acronym: {
          type: Sequelize.STRING,
          unique: true,          
          allowNull: false,
        }      
      },
      {
        schema: 'registry'
      }
    );
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('position', {
      schema: 'registry'
    });
    }
};
