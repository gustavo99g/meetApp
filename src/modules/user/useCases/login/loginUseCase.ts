import { AppError } from '../../../../shared/infra/http/error/AppError'
import { IUserRepo } from '../../repos/UserRepo'
import { IAuthService } from '../../services/authService'
import { IHashService } from '../../services/hashService'
import { LoginDTO } from './loginDTO'

class LoginUseCase {
  constructor(
    private userRepository: IUserRepo,
    private hashService: IHashService,
    private authService: IAuthService
  ) {}

  async execute(dto: LoginDTO) {
    const { email, password } = dto

    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new AppError('E-mail or password invalid', 401)
    }
    const passwordMatched = this.hashService.comparePassword(
      password,
      user.password
    )

    if (!passwordMatched) {
      throw new AppError('E-mail or password invalid', 401)
    }

    const token = this.authService.signJWT(user.id)

    return token
  }
}

export { LoginUseCase }
