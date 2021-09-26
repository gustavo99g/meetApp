import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { createConnection } from 'typeorm'
import { config } from '../typeorm/config/config'
import { Router } from './api/routes'
import { AppError } from './error/AppError'

const app = express()
app.use(express.json())

createConnection(config)
app.use(Router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    })
  }
  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  })
})
app.listen(3333, () => console.log('Server Running'))
