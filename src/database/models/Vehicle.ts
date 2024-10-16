import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';
import Company from './Company';
import VehicleType from './VehicleType';

class Vehicle extends Model {
  declare vehicleId: string
  declare brand: string
  declare model: string
  declare year: string
  declare licensePlate: string
  declare internalNumber: string
  declare companyId: string
  declare typeId: string
}

Vehicle.init({
  vehicle_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  brand: {
    type: sequelize.STRING,
    allowNull: false,
  },
  model: {
    type: sequelize.STRING,
    allowNull: false,
  },
  year: {
    type: sequelize.STRING,
    allowNull: false,
  },
  license_plate: {
    type: sequelize.STRING,
    allowNull: false,
  },
  internal_number: {
    type: sequelize.STRING,
    allowNull: false,
  },
  ccompany_id: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: 'company',
      key: 'company_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  type_id: {
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
  sequelize: db,
  tableName: 'vehicle',
  schema: 'registry',
  timestamps: false,
  underscored: true
}
)

Vehicle.belongsTo(Company, {
  foreignKey: 'companyId'
})

Company.hasMany(Vehicle, {
  foreignKey: 'companyId'
})

Vehicle.belongsTo(VehicleType, {
  foreignKey: 'typeId'
})

VehicleType.hasMany(Vehicle, {
  foreignKey: 'typeId'
})


export default Vehicle;