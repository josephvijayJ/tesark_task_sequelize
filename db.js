const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize('users', 'postgres', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});
module.exports = sequelize;

// const { Client } = require('pg');
// const dotenv = require('dotenv');
// dotenv.config();
// const client = new Client({
//   host: 'localhost',
//   user: 'postgres',
//   port: '5432',
//   password: process.env.DB_PASSWORD,
//   database: 'users',
// });

// client.connect(() => {
//   console.log('connected to DB');
// });

// module.exports = client;
