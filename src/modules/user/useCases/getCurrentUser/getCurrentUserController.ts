import { Request, Response } from 'express'
import { GetUserByIdUseCase } from '../getUserById/getUserByIdUseCase'

class GetCurrentUserController {
  constructor(private useCase: GetUserByIdUseCase) {}

  async execute(req: Request, res: Response) {
    const id = req.userId

    const user = await this.useCase.execute({
      id,
    })

    return res.status(200).json({ user })
  }
}

export { GetCurrentUserController }
