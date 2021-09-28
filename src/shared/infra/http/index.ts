import { authService } from '../../../modules/user/services/jwtAuthService'
import { Middleware } from './utils/Middleware'

const middleware = new Middleware(authService)

export { middleware }
