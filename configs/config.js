import dotenv from "dotenv";
const pathToEnvFile = "./env/.env";
dotenv.config({ path: pathToEnvFile });

export const db_config = {
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    database: process.env.DB2_NAME,
    username: process.env.DB2_USERNAME,
    password: process.env.DB2_PASSWORD,
    host: process.env.DB2_HOST,
    dialect: process.env.DB2_DIALECT,
  },
};
