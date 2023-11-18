const Sequelize = require('sequelize');
const config = require('./config/config.json');

const UserModel = require('../models/userModel')

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const User = UserModel(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = {sequelize, User};