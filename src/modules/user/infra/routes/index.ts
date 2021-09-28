import express from 'express'
import { middleware } from '../../../../shared/infra/http'
import { createUserController } from '../../useCases/createUser'
import { loginController } from '../../useCases/login'

const userRouter = express.Router()

userRouter.post('/', (req, res) => createUserController().execute(req, res))
userRouter.post('/login', (req, res) => loginController().execute(req, res))
userRouter.post('/me', middleware.ensureAuthenticated(), (req, res) =>
  res.json({ message: 'ok' })
)

export { userRouter }
