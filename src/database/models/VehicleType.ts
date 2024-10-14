import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';

class VehicleType extends Model {
  declare typeId: string
  declare typeIndex: number
}