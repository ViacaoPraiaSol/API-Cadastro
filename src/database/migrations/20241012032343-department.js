'use strict';

const { DataTypes } =require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'department',
      {
        department_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        department_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        /*alias: {
          type: Sequelize.STRING,
          allowNull: true,
        },*/
        department_index: {
          type: Sequelize.INTEGER,
          unique: true,
          autoIncrement: true,
          allowNull: false,
        },
        sector_id_fk: {
          type: DataTypes.UUID,
          allowNull:false,
          references: {
            model: 'sector',
            key: 'sector_id'
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
    await queryInterface.dropTable('department', {
      schema: 'registry'
    });
     
  }
};
