import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';

class Company extends Model {
  declare companyId: string
  declare companyName: string
  declare alias: string
  declare companyIndex: string
  declare acronym: string
}

Company.init({
  company_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  company_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  alias: {
    type: sequelize.STRING,
    allowNull: false,
  },
  company_index: {
    type: sequelize.STRING,
    //unique: true,
    //autoIncrement: true,
    allowNull: false,
  },
  acronym: {
    type: sequelize.STRING,
    unique: true,          
    allowNull: false,
  }    
},
{
  sequelize: db,
  tableName: 'company',
  schema: 'registry',
  timestamps: false,
  underscored: true
}
)

export default Company;