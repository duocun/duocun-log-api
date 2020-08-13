import dotenv from 'dotenv'

dotenv.config();

const env = process.env;

export const config = {
    DB_CONN: `mongodb://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}?authSource=${env.AUTH_DB_NAME}`,
    DB_HOST: env.DB_HOST,
    DB_NAME: 'duocun-logs',
    DB_PORT: '27017',
    DB_POOL_SIZE: 10,
    DB_USERNAME:'duocun',
    PORT: 8003,
}