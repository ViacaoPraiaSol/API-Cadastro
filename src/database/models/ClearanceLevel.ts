import { DataTypes, Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';

class ClearanceLevel extends Model {
		declare levelId: string
		declare levelName: string
}

ClearanceLevel.init({
	level_id: {
		type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
		},
		level_name: {
			type: sequelize.STRING,
			allowNull: false,
		}
	
}, {
	sequelize: db,
	tableName: 'clearance_level',
	schema: 'registry',
	timestamps: false,
  underscored: true,
}
);

export default ClearanceLevel;