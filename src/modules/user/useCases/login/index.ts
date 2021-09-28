import { UserRepository } from '../../repos/implementations/typeormUserRepo'
import { hashService } from '../../services/bcrypt'
import { authService } from '../../services/jwtAuthService'
import { LoginController } from './loginController'
import { LoginUseCase } from './loginUseCase'

const loginController = () => {
  const userRepository = new UserRepository()

  const loginUseCase = new LoginUseCase(
    userRepository,
    hashService,
    authService
  )

  return new LoginController(loginUseCase)
}

export { loginController }
