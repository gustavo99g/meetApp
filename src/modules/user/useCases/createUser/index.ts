import { UserRepository } from '../../repos/implementations/typeormUserRepo'
import { CreateUserController } from './createUserController'
import { CreateUserUseCase } from './createUserUseCase'

const createUserController = () => {
  const userRepository = new UserRepository()

  const createUserUseCase = new CreateUserUseCase(userRepository)

  return new CreateUserController(createUserUseCase)
}

export { createUserController }
