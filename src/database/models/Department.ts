import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';
import Sector from './Sector';

class Department extends Model {
  declare departmentId: string
  declare departmentName: string
  //declare alias: string
  declare departmentIndex: number
  declare sectorIdFk: string
}

Department.init({
  department_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  department_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  /*alias: {
    type: sequelize.STRING,
    allowNull: true,
  },*/
  department_index: {
    type: sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  },
  sector_id: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: 'sector',
      key: 'sector_id'
    },
  }
},
{
  sequelize: db,
  tableName: 'department',
  schema: 'registry',
  timestamps: false,
  underscored: true
}
)

Department.belongsTo(Sector, {
  foreignKey: 'sectorId'
})

Sector.hasMany(Department,{
  foreignKey: 'sectorId'
})
export default Department;