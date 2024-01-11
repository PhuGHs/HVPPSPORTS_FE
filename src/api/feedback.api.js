import { http } from '~/utils/axiosConfig'

export class FeedbackApi {
  static async addFeedback(body) {
    const response = await http.post('/Feedbacks/new-feedback', body)
    return response
  }

  static async getFeedBacks(id) {
    const response = await http.get(`/Feedbacks/get-all/${id}`)
    return response.data
  }

  static async getFeedBacksByCustomerID(customerID) {
    const response = await http.get(`/Feedbacks/get-by-customer/${customerID}`)
    return response.data
  }

  static async getUnReviewedProducts(customerID) {
    const response = await http.get(`/OrderDetails/get-unreviewed-products/${customerID}`)
    return response.data
  }
}
