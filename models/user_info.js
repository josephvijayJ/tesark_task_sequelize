const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  contact: {
    type: Sequelize.STRING,
  },
  aadhar: {
    type: Sequelize.STRING,
  },
  stockPoint: {
    type: Sequelize.STRING,
  },
  joiningDate: {
    type: Sequelize.DATE,
  },
  reportingManager: {
    type: Sequelize.STRING,
  },
  bloodGroup: {
    type: Sequelize.STRING,
  },
  emergencyContact: {
    type: Sequelize.STRING,
  },
  position: {
    type: Sequelize.STRING,
  },
  employeeType: {
    type: Sequelize.STRING,
  },
  shift: {
    type: Sequelize.STRING,
  },
  aadharPic: {
    type: Sequelize.STRING,
  },
});
User.sync();

module.exports = User;
