import { http } from '~/utils/axiosConfig'

export const SIGN_IN_URL = '/auth/signin'
export const SIGN_UP_URL = '/auth/signup'
export const SIGN_OUT_URL = '/auth/logout'
export const RESET_PASSWORD_URL = '/auth/reset-password'

export class AuthApi {
  static async signup(data) {
    const response = await http.post('/Accounts/register', data)
    return response
  }

  static async signin(data) {
    const response = await http.post('/Accounts/login', data)
    return response
  }

  static async logout() {
    const response = await http.get('/Accounts/logout')
    return response
  }

  static async sendFavorites(customerID, teams) {
    const response = await http.post(`/Accounts/set-favorite-teams/${customerID}`, teams)
    return response
  }
}
