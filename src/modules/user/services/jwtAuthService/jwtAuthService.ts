import jwt from 'jsonwebtoken'
import { IAuthService } from '../authService'
import { authConfig } from '../../../config/auth'

class JWTAuthService implements IAuthService {
  signJWT(id: string): string {
    return jwt.sign(id, authConfig.secret)
  }

  decodeJWT(token: string): Promise<string> {
    throw new Error('Method not implemented.')
  }
}

export { JWTAuthService }
