'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up(queryInterface, Sequelize) {
   
    // Iniciamos uma transação para garantir consistência
    const transaction = await queryInterface.sequelize.transaction();

    try {

      // TABELA EMPRESA
      const companies = await queryInterface.bulkInsert(
        {tableName: 'company', schema: 'registry'},
        [
          {
            company_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            company_name: 'VIACAO PRAIA SOL LTDA',
            alias: 'PRAIA SOL',
            company_index: '03',
            acronym: 'PS'
          },{
            company_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            company_name: 'VEREDA TRANSPORTES LTDA',
            alias: 'VEREDA',
            company_index: '07',
            acronym: 'VR'
          }
        ], {
          returning: ['company_id', 'company_name', 'alias', 'company_index','acronym'], transaction
        }
      );

      //Encontra o Id das empresas
      const IdPraiaSol = companies.find(company => company.alias === 'PRAIA SOL').company_id;
      const IdVereda = companies.find(company => company.alias === 'VEREDA').company_id;
      

      // TABELA SETORES
      const sectors = await queryInterface.bulkInsert(
        {tableName: 'sector', schema: 'registry'}, 
        [
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
        ],
        { returning: ['sector_id', 'sector_name', 'sector_index'], transaction }
      );

      const SectorIdAdm = sectors.find(id => id.sector_name === 'ADMINISTRATIVO').sector_id;
      const SectorIdManut = sectors.find(id => id.sector_name === 'MANUTENÇÃO').sector_id;
      //const SectorIdOp = sectors.find(id => id.sector_name === 'OPERACIONAL').sector_id;
      

      //TABELA DEPARTAMENTOS
      /*const departments =*/ await queryInterface.bulkInsert(
        {tableName: 'department', schema: 'registry'},
        [
          //ADMINISTRATIVO
          {
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'ALMOXARIFADO',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'ARRECADAÇÃO',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'BILHETAGEM',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'CÂMARA DE COMPENSAÇÃO DE TARIFA',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'CONTABILIDADE',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'DEPARTAMENTO DE PESSOAL',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'DEPARTAMENTO DE RECURSOS HUMANOS',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'DIRETORIA',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'JURÍDICO',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'MEDICINA DO TRABALHO',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'MONITORAMENTO',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'SEGURANÇA DO TRABALHO',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'TRÁFEGO',
            //alias: '',
            sector_id: SectorIdAdm
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'TECNOLOGIA DA INFORMAÇÃO',
            //alias: '',
            sector_id: SectorIdAdm
          },
          

          //MANUTENÇÃO
          {
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'ELÉTRICA',
            //alias: '',
            sector_id: SectorIdManut
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'MECÂNICA',
            //alias: '',
            sector_id: SectorIdManut
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'PROGRAMAÇÃO',
            //alias: '',
            sector_id: SectorIdManut
          },{
            department_id: Sequelize.literal('uuid_generate_v4()'), // Gera um UUID
            department_name: 'REFROMADORA',
            //alias: '',
            sector_id: SectorIdManut
          },
        ],
        { transaction }
      )


      // TABELA TIPO VEICULO
      const typeVehicles = await queryInterface.bulkInsert(
        {tableName: 'vehicle_type', schema: 'registry'},
        [
          {
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
        ],
        {returning: ['type_id', 'type_index','type_name' ] ,transaction }
      );

      const TypeArArticulado = typeVehicles.find(type => type.type_name === 'AR CONDICIONADO ARTICULADO').type_id;
      const TypeArConvencional = typeVehicles.find(type => type.type_name === 'AR CONDICIONADO CONVENCIONAL').type_id;
      const TypeArticulado = typeVehicles.find(type => type.type_name === 'ARTICULADO').type_id;
      const TypeConvencional = typeVehicles.find(type => type.type_name === 'CONVENCIONAL').type_id;
      const TypeGvBike = typeVehicles.find(type => type.type_name === 'GV BIKE').type_id;
      const TypeMicro = typeVehicles.find(type => type.type_name === 'MICRO-ÔNIBUS').type_id;

      const vehicles = await queryInterface.bulkInsert(
        {tableName: 'vehicle', schema: 'registry'},
        [
          {
            vehicle_id: Sequelize.literal('uuid_generate_v4()'),
            brand: 'MERCEDES',
            model: '2019',
            year: '2020',
            license_plate: 'AE3R-219',
            internal_number: '12279',
            company_id: IdPraiaSol,
            type_id: TypeArArticulado,
          },
          {
            vehicle_id: Sequelize.literal('uuid_generate_v4()'),
            brand: 'MASCARELO',
            model: '2016',
            year: '2017',
            license_plate: 'FC7E-982',
            internal_number: '13253',
            company_id: IdVereda,
            type_id: TypeArConvencional,
          },
        ], {transaction}
      )


      // TABELA CLEARANCE LEVEL
      const clearanceLevels = await queryInterface.bulkInsert(
        {tableName: 'clearance_level', schema: 'registry'},
        [
          {
            level_id: Sequelize.literal('uuid_generate_v4()'),
            level_name: 'SUPERADMIN',
          },{
            level_id: Sequelize.literal('uuid_generate_v4()'),
            level_name: 'CLIENT',
            
          }
        ], { 
          // Usamos "returning" para capturar os UUIDs gerados
          returning: ['level_id', 'level_name'], transaction}
      );

      // Encontrar o ID do clearance level para SUPERADMIN e CLIENT
      const superAdminClearanceId = clearanceLevels.find(level => level.level_name === 'SUPERADMIN').level_id;
      const clientClearanceId = clearanceLevels.find(level => level.level_name === 'CLIENT').level_id;

    
      // Inserir o usuário com referência ao clearance level correspondente
      await queryInterface.bulkInsert(
        {tableName: 'user', schema: 'registry'}, [
          {
            user_id: Sequelize.literal('uuid_generate_v4()'),
            user_name: 'TI-PraiaSol',
            email: 'suporte.ti@viacaopraiasol.com.br',
            password: '1254',
            clearance: superAdminClearanceId // Associando ao SUPERADMIN 
          },{
            user_id: Sequelize.literal('uuid_generate_v4()'),
            user_name: 'clientTest',
            email: 'client@gmail.com',
            password: '1234',
            clearance: clientClearanceId // Associando ao CLIENT
          }
        ],
        { transaction }
      );

      
      
      

      // commit da transação
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
    
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction(); //transação do rollback

    try {
      await queryInterface.bulkDelete({ tableName: 'company', schema: 'registry' }, null, { transaction });
      await queryInterface.bulkDelete({ tableName: 'sector', schema: 'registry' }, null, { transaction });
      await queryInterface.bulkDelete({ tableName: 'department', schema: 'registry' }, null, { transaction });
      await queryInterface.bulkDelete({ tableName: 'position', schema: 'registry' }, null, { transaction });
      await queryInterface.bulkDelete({ tableName: 'employee', schema: 'registry' }, null, { transaction });
      await queryInterface.bulkDelete({ tableName: 'vehicle_type', schema: 'registry' }, null, { transaction });
      await queryInterface.bulkDelete({ tableName: 'vehicle', schema: 'registry' }, null, { transaction });
      await queryInterface.bulkDelete({ tableName: 'clearance_level', schema: 'registry' }, null, { transaction });
      await queryInterface.bulkDelete({ tableName: 'user', schema: 'registry' }, null, { transaction });
      
      await transaction.commit();

    } catch(err){
      await transaction.rollback();
      throw err
    }
  }
};
