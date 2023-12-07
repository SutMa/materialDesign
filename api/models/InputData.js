const {DataTypes, Model} = require('sequelize');

class InputData extends Model {};

InputData.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        psi: {
            type: DataTypes.FLOAT,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
        },
        conductiveFiller: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
        },
        cementType: {
            type: DataTypes.INTEGER,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
        },
        scms: {
            type: DataTypes.STRING,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
        }
        
        
    },
    {
    sequelize,
    modelName: 'InputData',
    tableName: 'inputdata',
    }
);

module.exports = InputData;
    
