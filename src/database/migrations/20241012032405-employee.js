'use strict';

const { DataTypes } =require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'employee', 
      { 
        employee_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        internal_number: {
          type: Sequelize.INTEGER,
          unique: true,
          allowNull: false,
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        full_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        position_id_fk: {
          type: DataTypes.UUID,
          allowNull:false,
          references: {
            model: 'position',
            key: 'position_id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        company_id_fk: {
          type: DataTypes.UUID,
          allowNull:false,
          references: {
            model: 'company',
            key: 'company_id'
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
    await queryInterface.dropTable('employee');
    
  }
};
