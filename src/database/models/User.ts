import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';
import ClearanceLevel from './ClearanceLevel';

class User extends Model {
  declare userId: string
  declare userName: string
  declare email: string
  declare password: string 
  declare clearance: string
}

User.init({
  user_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  user_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
  clearance: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: 'clearance_level',
      key: 'level_id'
    }
  }
},
{
  sequelize: db,
  tableName: 'user',
  timestamps: false,
  underscored: true,
})

User.belongsTo(ClearanceLevel, {
  foreignKey: 'clearance'
})

ClearanceLevel.hasMany(User, {
  foreignKey: 'clearance'
})

export default User;