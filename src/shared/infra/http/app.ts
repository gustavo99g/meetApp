import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'
import { config } from '../typeorm/config/config'

createConnection(config)

const app = express()
app.use(express.json())

app.post('/user', (req, res) => res.json({ message: 'ok' }))

app.listen(3333, () => console.log('Server Running'))
