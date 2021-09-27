import { getConnection, getRepository, Repository } from 'typeorm'
import { User } from '../../../../shared/infra/typeorm/entities/User.entity'
import { UserDTO } from '../../dtos/userDTO'
import { IUserRepo } from '../UserRepo'

class UserRepository implements IUserRepo {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOne({ email })

    if (!user) {
      return null
    }
    return user
  }

  async exists(email: string): Promise<boolean> {
    const user = await this.repository.findOne({ email })

    return !!user
  }

  async save(user: UserDTO): Promise<void> {
    const typeormUser = this.repository.create(user)

    await this.repository.save(typeormUser)
  }
}

export { UserRepository }
