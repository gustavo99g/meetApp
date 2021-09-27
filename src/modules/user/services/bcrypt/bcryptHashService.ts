import { hash } from 'bcrypt'
import { IHashService } from '../hashService'

class BcryptHashService implements IHashService {
  async hashPassword(password: string) {
    const hashedPassword = await hash(password, 8)

    return hashedPassword
  }
}

export { BcryptHashService }
