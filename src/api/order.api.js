import { http } from '~/utils/axiosConfig'
import { Helper } from '~/utils/helper'

export class OrderApi {
  static async newOrder(body) {
    const response = await http.post('/Orders/new-order', body)
    return response
  }

  static async cancelOrderDetails(customerID, productID, size) {
    const response = await http.delete(`/OrdersDetails/delete/${customerID}/${productID}/${size}`)
    return response
  }

  static async cancelOrder(orderID) {
    const response = await http.delete(`/Orders/cancel-order/${orderID}/${false}`)
    return response
  }

  static async addDetails(body) {
    try {
      const response = await http.post('/OrderDetails/add-detail', body)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  static async getOrdersByType(customerId, type) {
    const response = await http.get(`/Orders/get-by-customerID/${customerId}/${Helper.getIndexOfTabs(type)}`)
    return response.data
  }

  static async getOrderDetailsById(orderID) {
    const response = await http.get(`/OrderDetails/get-detail/${orderID}`)
    return response.data
  }
}
