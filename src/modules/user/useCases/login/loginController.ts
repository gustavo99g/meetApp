import { Request, Response } from 'express'
import { LoginUseCase } from './loginUseCase'

class LoginController {
  constructor(private useCase: LoginUseCase) {}

  async execute(req: Request, res: Response) {
    const { password, email } = req.body

    const token = await this.useCase.execute({
      email,
      password,
    })

    return res.status(201).json({ token })
  }
}

export { LoginController }
