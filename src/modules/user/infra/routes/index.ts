import express from 'express'
import multer from 'multer'
import { multerConfig } from '../../../../config/multer'
import { middleware } from '../../../../shared/infra/http'
import { createUserController } from '../../useCases/createUser'
import { getCurrentUserController } from '../../useCases/getCurrentUser'
import { loginController } from '../../useCases/login'

const userRouter = express.Router()
const upload = multer(multerConfig)

userRouter.post('/', (req, res) => createUserController().execute(req, res))
userRouter.post('/login', (req, res) => loginController().execute(req, res))
userRouter.get('/me', middleware.ensureAuthenticated(), (req, res) =>
  getCurrentUserController().execute(req, res)
)
userRouter.post(
  '/profile',
  middleware.ensureAuthenticated(),
  upload.single('avatar'),
  (req, res) => {
    console.log(req.file)
    return res.send()
  }
)

export { userRouter }
