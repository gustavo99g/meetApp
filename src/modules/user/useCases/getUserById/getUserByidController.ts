import { Request, Response } from 'express'
import { GetUserByIdUseCase } from './getUserByIdUseCase'

class CreateUserController {
  constructor(private useCase: GetUserByIdUseCase) {}

  async execute(req: Request, res: Response) {
    const { id } = req.body

    const user = await this.useCase.execute({
      id,
    })

    return res.status(201).json({ user })
  }
}

export { CreateUserController }
