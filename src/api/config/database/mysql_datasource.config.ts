import 'reflect-metadata';

import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource ({
    type: 'mysql',
    host: 'localhost',
    port: 3360,
    username: 'ro ot',
    password: 'root',
    database: 'test',
    synchronize: false,
    logging: false,
    entities: ['src/api/components/**/*.entity{ts,.js}'],
    migrations: [],
    subscribers: [],
});