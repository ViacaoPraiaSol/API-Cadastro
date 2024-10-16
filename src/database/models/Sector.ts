import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';

class Sector extends Model {
  declare sectorId: string
  declare sectorName: string
  declare sectorIndex: number
}

Sector.init({
  sector_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  sector_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  sector_index: {
    type: sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  }
},
{
  sequelize: db,
  tableName: 'sector',
  schema: 'registry',
  timestamps: false,
  underscored: true
}
)

export default Sector;