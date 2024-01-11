import mysql from '../connection/connection'
import querys from './querys'

const createTable = async () => await querys.CreateTablesQuery.map(async query => await mysql.connection.query(query))
const getUsers = async () => (await mysql.connection.query(querys.GetUsersQuery))[0]
const getUserByEmail = async (email: String) => (await mysql.connection.query(querys.GetUsersQueryByID, [email]))[0];

export default {
  createTable,
  getUsers,
  getUserByEmail
};
