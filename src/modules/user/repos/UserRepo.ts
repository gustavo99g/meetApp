import { User } from '../../../shared/infra/typeorm/entities/User.entity'
import { UserDTO } from '../dtos/userDTO'

export interface IUserRepo {
  findByEmail(email: string): Promise<User | null>
  exists(email: string): Promise<boolean>
  save(user: UserDTO): Promise<void>
}
