import { http } from '~/utils/axiosConfig'

export const SIGN_IN_URL = '/auth/signin'
export const SIGN_UP_URL = '/auth/signup'
export const SIGN_OUT_URL = '/auth/logout'
export const RESET_PASSWORD_URL = '/auth/reset-password'

export class AuthApi {
  static async signup(data) {
    try {
      return http.post('/Accounts/register', data)
    } catch (error) {
      console.log(error)
    }
  }

  static signin(data) {
    return http.post('/Accounts/login', data)
  }

  static logout() {
    return http.get('/Accounts/logout')
  }
}
