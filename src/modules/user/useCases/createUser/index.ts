import { UserRepository } from '../../repos/implementations/typeormUserRepo'
import { BcryptHashService } from '../../services/bcrypt/bcryptHashService'
import { CreateUserController } from './createUserController'
import { CreateUserUseCase } from './createUserUseCase'

const createUserController = () => {
  const userRepository = new UserRepository()
  const hashService = new BcryptHashService()

  const createUserUseCase = new CreateUserUseCase(userRepository, hashService)

  return new CreateUserController(createUserUseCase)
}

export { createUserController }
