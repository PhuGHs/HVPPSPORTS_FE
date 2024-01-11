import { httpChatbot } from '~/utils/axiosConfig'

export class ChatbotApi {
  static async queryFromCustomer(body) {
    try {
      const response = await httpChatbot.post('chatbot', body)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}
