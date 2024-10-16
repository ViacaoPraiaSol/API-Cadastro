import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';

class VehicleType extends Model {
  declare typeId: string
  declare typeIndex: number
  declare typeName: string
}

VehicleType.init({
  type_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  type_index: {
    type: sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  },
  type_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  /*class: {
    type: Sequelize.STRING,
    allowNull: false,
  }*/
},
{
  sequelize: db,
  tableName: 'vehicle_type',
  schema: 'registry',
  timestamps: false,
  underscored: true
}
)

export default VehicleType;