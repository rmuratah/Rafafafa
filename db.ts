import mysql from './connection/connection'

// const createSchema = async () => await mysql.connection.query("CREATE SCHEMA sigma_case ;")

const createTableUser = async () => await mysql.connection.query(
    `CREATE TABLE sigma_case.user (
    iduser INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    PRIMARY KEY (iduser));
  `)

export default {
    //    createSchema, 
    createTableUser,
};
