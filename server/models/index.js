import Sequelize from 'sequelize';
import config from '../modules/config';
import fs from 'fs';
import path from 'path';

const dbName = config.get('database:dbname');
const username = config.get('database:username');
const password = config.get('database:password');
const dbHost = config.get('database:host');
const poolSize = config.get('database:pool-size');

const db = {};
console.log(`Connecting to ${dbName} database`);

const sequelize = new Sequelize(dbName, username, password, {
  host: dbHost,
  dialect: 'postgres',

  logging: config.get('NODE_ENV') === 'DEV',

  pool: {
    max: poolSize,
    min: 0,
    idle: 10000
  }
});

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js')).forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
