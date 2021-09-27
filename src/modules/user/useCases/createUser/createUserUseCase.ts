import { createUserDto } from './createUserDto'
import { AppError } from '../../../../shared/infra/http/error/AppError'
import { IUserRepo } from '../../repos/UserRepo'
import { IHashService } from '../../services/hashService'

class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepo,
    private hashService: IHashService
  ) {}

  async execute(dto: createUserDto) {
    const { email, name, password } = dto

    const alreadyExist = await this.userRepository.exists(email)

    if (alreadyExist) {
      throw new AppError('E-mail already registered', 400)
    }
    const hashedPassword = await this.hashService.hashPassword(password)

    await this.userRepository.save({
      email,
      name,
      password: hashedPassword,
    })
  }
}

export { CreateUserUseCase }
