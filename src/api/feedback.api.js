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
}
