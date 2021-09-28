import { UserRepository } from '../../repos/implementations/typeormUserRepo'
import { hashService } from '../../services/bcrypt'
import { CreateUserController } from './createUserController'
import { CreateUserUseCase } from './createUserUseCase'

const createUserController = () => {
  const userRepository = new UserRepository()
  const createUserUseCase = new CreateUserUseCase(userRepository, hashService)

  return new CreateUserController(createUserUseCase)
}

export { createUserController }
