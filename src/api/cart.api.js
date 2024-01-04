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

  static async removeFromCart(customerId, productId, size) {
    try {
      const response = await http.delete(`/Carts/remove/${customerId}/${productId}/${size}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  static async increase(customerId, productId, size) {
    try {
      const response = await http.put(`/Carts/increase/${customerId}/${productId}/${size}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  static async decrease(customerId, productId, size) {
    try {
      const response = await http.put(`/Carts/decrease/${customerId}/${productId}/${size}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  static async clear(customerId) {
    try {
      const response = await http.delete(`/Carts/clear/${customerId}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  static async getCheckoutInfo(customerId) {
    try {
      const response = await http.get(`/Carts/get-checkout-info/${customerId}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}
