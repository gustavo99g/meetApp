import { UserRepository } from '../../repos/implementations/typeormUserRepo'
import { BcryptHashService } from '../../services/bcrypt/bcryptHashService'
import { JWTAuthService } from '../../services/jwtAuthService/jwtAuthService'
import { LoginController } from './loginController'
import { LoginUseCase } from './loginUseCase'

const loginController = () => {
  const userRepository = new UserRepository()
  const hashService = new BcryptHashService()
  const authService = new JWTAuthService()

  const loginUseCase = new LoginUseCase(
    userRepository,
    hashService,
    authService
  )

  return new LoginController(loginUseCase)
}

export { loginController }
