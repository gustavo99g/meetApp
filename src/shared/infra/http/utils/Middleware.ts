import { NextFunction, Request, Response } from 'express'
import { IAuthService } from '../../../../modules/user/services/authService'

class Middleware {
  // eslint-disable-next-line no-empty-function
  constructor(private authService: IAuthService) {}

  public ensureAuthenticated() {
    return async (req: Request, res: Response, next: NextFunction) => {
      const [, token] = req.headers.authorization?.split(' ') as string[]

      if (token) {
        const decoded = await this.authService.decodeJWT(token)
        if (!decoded) {
          return res.status(403).json({ message: 'Token signature failed' })
        }
        req.userId = decoded
        return next()
      }
      return res.status(403).json({ message: 'Token not provided' })
    }
  }
}

export { Middleware }
