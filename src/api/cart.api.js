import { http } from '~/utils/axiosConfig'

export class CartApi {
  static async getTotalNumberOfCarts(customerId) {
    try {
      const response = await http.get(`/Carts/total/${customerId}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  static async getCarts(customerId) {
    try {
      const response = await http.get(`/Carts/get-carts/${customerId}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  static async addToCart(body) {
    try {
      const response = await http.post('/Carts/add-to-cart', body)
      return response
    } catch (error) {
      console.log(error)
    }
  }
}
