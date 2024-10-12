'use strict';

const { DataTypes } =require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'user_employee', 
      {
        user_id_fk: {
          type: DataTypes.UUID,
          allowNull:false,
          references: {
            model: 'user',
            key: 'user_id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        employee_id_fk: {
          type: DataTypes.UUID,
          allowNull:false,
          references: {
            model: 'employee',
            key: 'employee_id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      },
      {
        schema: 'registry'
      }
    );
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_employee');
    
  }
};
