import { http } from '~/utils/axiosConfig'

export class CustomerApi {
  static async updateAccountDetails(body) {
    const response = await http.put('/Customers/update-info', body)
    return response
  }

  static async updatePassword(body) {
    const response = await http.put('/Accounts/change-password', body)
    return response
  }

  static async readme() {
    const response = await http.get('/Accounts/read-me')
    return response
  }
}
