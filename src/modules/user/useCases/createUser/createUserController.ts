import { Request, Response } from 'express'
import { CreateUserUseCase } from './createUserUseCase'

class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  async execute(req: Request, res: Response) {
    const { name, password, email } = req.body

    await this.useCase.execute({
      email,
      name,
      password,
    })

    return res.status(201).send()
  }
}

export { CreateUserController }
