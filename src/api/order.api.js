import { http } from '~/utils/axiosConfig'

export class OrderApi {
  static async newOrder(body) {
    try {
      const response = await http.post('/Orders/new-order', body)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  static async addDetails(body) {
    try {
      const response = await http.post('/OrderDetails/add-detail', body)
      return response
    } catch (error) {
      console.error(error)
    }
  }
}
