import express from 'express'
import { userRouter } from '../../../../modules/user/infra/routes'

const Router = express.Router()

Router.use('/users', userRouter)

export { Router }
