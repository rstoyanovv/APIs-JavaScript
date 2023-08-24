import { dbConnection } from "./environment.js";
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: dbConnection.user,
    host: dbConnection.host,
    database: dbConnection.database,
    password: dbConnection.password,
    port: dbConnection.port,
});

export { pool };
