import { User } from '../../../shared/infra/typeorm/entities/User.entity'

export interface IUser {
  name: string
  email: string
  password: string
}

export interface IUserRepo {
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  exists(email: string): Promise<boolean>
  save(user: IUser): Promise<void>
}
