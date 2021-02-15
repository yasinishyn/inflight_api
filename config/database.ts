import mongoose from 'mongoose';

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

const defaultConfig = {
  user: DB_USERNAME || '',
  pass: DB_PASSWORD || '',
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  mongodbOptions:{
    poolSize: 5,
    native_parser: true
  }
};

const database = {
  development: {
    ...defaultConfig
  },
  test: {
    ...defaultConfig,
    mongodbOptions:{
      poolSize: 2,
      native_parser: true
    }
  },
};

const dbConfig = database[process.env.NODE_ENV];

const initDB = () => {
  mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`);
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
  mongoose.connection.on('error', console.error);
};

export default initDB;
