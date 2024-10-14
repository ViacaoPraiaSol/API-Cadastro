'use strict';

const { DataTypes } =require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'user', 
      {
        user_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        user_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        clearance: {
          type: DataTypes.UUID,
          allowNull:false,
          references: {
            model: 'clearance_level',
            key: 'level_id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }

      },
      {
        schema: 'registry'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user', {
      schema: 'registry'
    })
  }
};
