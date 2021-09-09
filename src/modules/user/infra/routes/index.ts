import express from 'express'
import { getRepository } from 'typeorm'
import { User } from '../../../../shared/infra/typeorm/entities/User.entity'

const userRouter = express.Router()

userRouter.post('/', async (req, res) => {
    const { name, password, email } = req.body

    const userRepository = getRepository(User)

    const alreadyExist = await userRepository.findOne({ email })

    if (alreadyExist) {
        return res.status(403).json({
            messge: 'E-mail already registered',
        })
    }

    const user = userRepository.create({
        name,
        email,
        password,
    })

    await userRepository.save(user)

    return res.status(201).send()
})

export { userRouter }
