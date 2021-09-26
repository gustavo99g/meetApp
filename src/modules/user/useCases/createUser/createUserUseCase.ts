import { createUserDto } from './createUserDto'
import { AppError } from '../../../../shared/infra/http/error/AppError'
import { IUserRepo } from '../../repos/UserRepo'

class CreateUserUseCase {
  constructor(private userRepository: IUserRepo) {}

  async execute(dto: createUserDto) {
    const { email, name, password } = dto

    const alreadyExist = await this.userRepository.exists(email)

    if (alreadyExist) {
      throw new AppError('E-mail already registered', 400)
    }

    await this.userRepository.save({
      email,
      name,
      password,
    })
  }
}

export { CreateUserUseCase }
