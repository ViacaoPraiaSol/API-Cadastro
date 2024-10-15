'use strict';

const { DataTypes } =require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'bus', 
      {
        bus_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        internal_number: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        vehicle_id_fk: {
          type: DataTypes.UUID,
          allowNull:false,
          references: {
            model: 'vehicle',
            key: 'vehicle_id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
    await queryInterface.dropTable('bus', {
      schema: 'registry'
    })
  }
};
