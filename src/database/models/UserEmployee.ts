import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';
import User from './User';
import Employee from './Employee';

class UserEmployee extends Model {
  declare userId: string
  declare employeeId: string
}

UserEmployee.init({
  user_id: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: 'user',
      key: 'user_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  employee_id: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: 'employee',
      key: 'employee_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
},
{
  sequelize: db,
  tableName: 'user_employee',
  schema: 'registry',
  timestamps: false,
  underscored: true,
}
)

// Estabelecendo os relacionamentos
// Um funcionário pode ter no máximo um usuário
Employee.hasOne(UserEmployee, {
  foreignKey: 'employee_id',
  //as: 'UserEmployee', // Alias opcional para clareza
});

// Um usuário pode ter no máximo um funcionário
User.hasOne(UserEmployee, {
  foreignKey: 'user_id',
  //as: 'UserEmployee', // Alias opcional para clareza
});

// Opcional: associações inversas para facilitar o uso
UserEmployee.belongsTo(Employee, {
  foreignKey: 'employee_id',
  //as: 'Employee'
});

UserEmployee.belongsTo(User, {
  foreignKey: 'user_id',
  //as: 'User'
});

export default UserEmployee;