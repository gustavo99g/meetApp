import jwt from 'jsonwebtoken'
import { IAuthService } from '../authService'
import { authConfig } from '../../../../config/auth'

class JWTAuthService implements IAuthService {
  public signJWT(id: string): string {
    return jwt.sign(id, authConfig.secret)
  }

  public decodeJWT(token: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return resolve(null)
        return resolve(decoded)
      })
    })
  }
}

export { JWTAuthService }
