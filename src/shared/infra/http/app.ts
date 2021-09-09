import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'
import { config } from '../typeorm/config/config'
import { Router } from './api/routes'

createConnection(config)

const app = express()
app.use(express.json())

app.use(Router)

app.listen(3333, () => console.log('Server Running'))
