import { Pool } from "pg";
import dotenv from "dotenv";

//? first we need to configure dotenv to access the environment variables 
dotenv.config();    
//? then we can create a new pool 
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined
});

export default pool;