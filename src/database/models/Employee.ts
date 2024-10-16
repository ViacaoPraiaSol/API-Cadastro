import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';
import Position from './Position';
import Company from './Company';
import Department from './Department';

class Employee extends Model {
  declare employeeId: string
  declare internalNumber: number
  declare firstName: string
  declare lastName: string
  declare fullName: string
  declare companyId: string
  declare departmentId: string
  declare positionId: string
}

Employee.init({
  employee_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  internal_number: {
    type: sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
  first_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  full_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  company_id: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: 'company',
      key: 'company_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  department_id: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: 'department',
      key: 'department_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  position_id: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: 'position',
      key: 'position_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
},
{
  sequelize: db,
  tableName: 'employee',
  schema: 'registry',
  timestamps: false,
  underscored: true
}
)

Employee.belongsTo(Company, {
  foreignKey: 'companyId'
})

Company.hasMany(Employee, {
  foreignKey: 'companyId'
})

Employee.belongsTo(Position, {
  foreignKey: 'positionId'
})

Position.hasMany(Employee, {
  foreignKey: 'positionId'
})

Employee.belongsTo(Department, {
  foreignKey: 'departmentId'
})

Department.hasMany(Employee, {
  foreignKey: 'departmentId'
})

export default Employee;