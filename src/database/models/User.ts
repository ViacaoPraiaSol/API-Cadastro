import { DataTypes, Model } from 'sequelize';
import db from '.'
import sequelize from 'sequelize';

class User extends Model {
  declare userId: string
  declare userName: string
  declare email: string
  declare password: string 
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
  }
},
{
  sequelize: db,
  tableName: 'user',
  timestamps: false,
  underscored: true,
})

export default User;