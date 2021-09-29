import { UserRepository } from '../../repos/implementations/typeormUserRepo'
import { CreateUserController } from './getUserByidController'
import { GetUserByIdUseCase } from './getUserByIdUseCase'

const createUserController = () => {
  const userRepository = new UserRepository()
  const createUserUseCase = new GetUserByIdUseCase(userRepository)

  return new CreateUserController(createUserUseCase)
}

export { createUserController }
