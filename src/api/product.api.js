import { http } from '~/utils/axiosConfig'

export class ProductApi {
  static async getNewArrivalProducts() {
    const response = await http.get('/Products/new-arrival')
    return response.data
  }

  static async getBestSellerProducts() {
    const response = await http.get('/Products/best-seller')
    return response.data
  }

  static async getProductById(id) {
    const response = await http.get(`/Products/get-by-id/${id}`)
    return response.data
  }

  static async getFeedBacks(id) {
    const response = await http.get(`/Feedbacks/get-all/${id}`)
    return response.data
  }
}
