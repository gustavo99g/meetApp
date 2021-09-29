import { UserRepository } from '../../repos/implementations/typeormUserRepo'
import { GetCurrentUserController } from './getCurrentUserController'
import { GetUserByIdUseCase } from '../getUserById/getUserByIdUseCase'

const getCurrentUserController = () => {
  const userRepository = new UserRepository()
  const getUserByIdeUseCase = new GetUserByIdUseCase(userRepository)

  return new GetCurrentUserController(getUserByIdeUseCase)
}

export { getCurrentUserController }
