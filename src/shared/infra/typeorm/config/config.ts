import { ConnectionOptions } from 'typeorm'

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    database: 'meetapp',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    synchronize: true,
    entities: [],
}

export { config }
