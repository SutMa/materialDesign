const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, 
      },
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    }
    
  },
  {
    sequelize,
    modelName: 'User', 
    tableName: 'users', 
  }
);

User.beforeCreate (async (user) => {
  await user.hashPassword();
})

module.exports = User;

