import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';

class Position extends Model{
  declare positionId: string
  declare positionName: string
}

Position.init({
  position_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  position_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  /*position_index: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  },*/
  /*department_id: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: 'department',
      key: 'department_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }*/
},
{
  sequelize: db,
  tableName: 'position',
  schema: 'registry',
  timestamps: false,
  underscored: true
}
)

export default Position;

