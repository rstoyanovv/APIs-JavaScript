import dotenv from 'dotenv';
dotenv.config({path: '../.env'});

export const dbConnection = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

export const jwtConfig = {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
};

export const passwordConfig = {
    saltRounds: 12,
};
