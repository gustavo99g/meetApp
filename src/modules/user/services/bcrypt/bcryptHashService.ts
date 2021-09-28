import { hash, compare } from 'bcrypt'
import { IHashService } from '../hashService'

class BcryptHashService implements IHashService {
  public async hashPassword(password: string) {
    const hashedPassword = await hash(password, 8)

    return hashedPassword
  }

  public async comparePassword(password: string, hashedPassword: string) {
    const isValid = await compare(password, hashedPassword)

    return isValid
  }
}

export { BcryptHashService }
