import { getRepository } from 'typeorm'
import { User } from '../../../../shared/infra/typeorm/entities/User.entity'
import { createUserDto } from './createUserDto'
import { AppError } from '../../../../shared/infra/http/error/AppError'

class CreateUserUseCase {
  async execute(dto: createUserDto) {
    const { email, name, password } = dto
    const userRepository = getRepository(User)

    const alreadyExist = await userRepository.findOne({ email })

    if (alreadyExist) {
      throw new AppError('E-mail already registered', 400)
    }

    const user = userRepository.create({
      name,
      email,
      password,
    })

    await userRepository.save(user)

    return user
  }
}

export { CreateUserUseCase }
