'use strict';

const { DataTypes } =require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'position', 
      {
        position_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        position_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        /*position_index: {
          type: Sequelize.INTEGER,
          unique: true,
          autoIncrement: true,
          allowNull: false,
        },*/
        department_id_fk: {
          type: DataTypes.UUID,
          allowNull:false,
          references: {
            model: 'department',
            key: 'department_id'
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
    await queryInterface.dropTable('position');
    }
};
