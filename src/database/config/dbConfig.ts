import 'dotenv/config'
import { Options } from 'sequelize'

const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env

  const config: Options = {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres'
  }
  /*
  ,
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }*/

    export = config