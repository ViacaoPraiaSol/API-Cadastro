'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert({tableName: 'clearance_level', schema: 'registry'},[
      {
        level_id: Sequelize.literal('uuid_generate_v4()'),
        level_name: 'SUPERADMIN',
      },
      {
        level_id: Sequelize.literal('uuid_generate_v4()'),
        level_name: 'CLIENT',
        
      }
    ]);

    await queryInterface.bulkInsert(
      {tableName: 'sector', schema: 'registry'}, [
      {
        sector_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
        sector_name: 'ADMINISTRATIVO',
        
      },{
        sector_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
        sector_name: 'MANUTENÇÃO',
        
      },{
        sector_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
        sector_name: 'OPERACIONAL',
        
      }
      ]
    );

    await queryInterface.bulkInsert(
      {tableName: 'vehicle_type', schema: 'registry'},
      [{
        type_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
        type_name: 'AR CONDICIONADO ARTICULADO',
      },{
        type_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
        type_name: 'AR CONDICIONADO CONVENCIONAL',
      },{
        type_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
        type_name: 'ARTICULADO',
      },{
        type_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
        type_name: 'CONVENCIONAL',
      },{
        type_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
        type_name: 'GV BIKE',
      },{
        type_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
        type_name: 'MICRO-ÔNIBUS',
      }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete({tableName: 'clearance_level', schema: 'registry'});
    await queryInterface.bulkDelete({tableName: 'sector', schema: 'registry'});
    await queryInterface.bulkDelete({tableName: 'vehicle_type', schema: 'registry'});
  }
};
