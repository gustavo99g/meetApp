import { ConnectionOptions } from 'typeorm'

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'meetapp',
  port: 5432,
  username: 'docker',
  password: 'docker',
  synchronize: true,
  entities: ['./src/shared/infra/typeorm/entities/*.ts'],
}

export { config }
