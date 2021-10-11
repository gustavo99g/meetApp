import { NextFunction, Request, Response } from 'express'
import { IAuthService } from '../../../../modules/user/services/authService'

class Middleware {
  // eslint-disable-next-line no-empty-function
  constructor(private authService: IAuthService) {}

  public ensureAuthenticated() {
    return async (req: Request, res: Response, next: NextFunction) => {
      const { authorization } = req.headers

      if (!authorization) {
        return res
          .status(403)
          .json({ message: 'Please provide authorization header' })
      }

      const [, token] = authorization?.split(' ')

      if (!token) {
        return res.status(403).json({ message: 'Token not provided' })
      }
      const decoded = await this.authService.decodeJWT(token)
      if (!decoded) {
        return res.status(403).json({ message: 'Token signature failed' })
      }
      req.userId = decoded
      return next()
    }
  }
}

export { Middleware }
