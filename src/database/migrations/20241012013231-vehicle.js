'use strict';

const { DataTypes } =require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'vehicle', 
      {
        vehicle_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        brand: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        model: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        year: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        license_plate: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        type_id_fk: {
          type: DataTypes.UUID,
          allowNull:false,
          references: {
            model: 'vehicle_type',
            key: 'type_id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      }, 
      {
        schema: 'registry'
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicle')
  }
};
