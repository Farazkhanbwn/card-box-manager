import HttpClient from './http-client'

const API_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_API_ENDPOINT

const AuthServicePaths = Object.freeze({
  LOGIN: `${API_ENDPOINT}/login`,
})

type LoginPayloadType = {
  email: string
  password: string
}

type LoginResponse = {
  token: string
  success: boolean
  message?: string
}

class AuthService extends HttpClient {
  static async loginUser(body: LoginPayloadType) {
    const loginResponseData = (await this.post<LoginPayloadType>(AuthServicePaths.LOGIN, body)) as LoginResponse
    return loginResponseData
  }
}

export default AuthService
