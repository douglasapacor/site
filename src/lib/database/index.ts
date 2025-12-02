import mysql, { Pool } from "mysql2/promise"

const global = globalThis as unknown as {
  database: Pool
}

const database =
  global.database ??
  mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  })

if (process.env.NODE_ENV !== "production") global.database = database

export default database
