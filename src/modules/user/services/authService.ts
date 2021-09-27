export interface IAuthService {
  signJWT(id: string): string
  decodeJWT(token: string): Promise<string>
}
