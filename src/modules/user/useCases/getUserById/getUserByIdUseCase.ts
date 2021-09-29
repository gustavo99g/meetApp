import { AppError } from '../../../../shared/infra/http/error/AppError'
import { UserDTO } from '../../dtos/userDTO'
import { IUserRepo } from '../../repos/UserRepo'
import { IAuthService } from '../../services/authService'
import { IHashService } from '../../services/hashService'
import { GetUserByIdDTO } from './getUserByIdDTO'

class GetUserByIdUseCase {
  constructor(private userRepository: IUserRepo) {}

  async execute(dto: GetUserByIdDTO): Promise<UserDTO> {
    const { id } = dto

    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new AppError('User not found', 404)
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    }
  }
}

export { GetUserByIdUseCase }
