import { http } from '~/utils/axiosConfig'

export class ChatApi {
  static async getMessages(roomID) {
    const response = await http.get(`/Chat/get-messages/${roomID}`)
    return response.data
  }

  static async addNewRoom(customerID) {
    const response = await http.post(`/Chat/add-new-room`, customerID)
    return response.data
  }

  static async sendMessage(body) {
    const response = await http.post(`/Chat/send-message`, body)
    return response.data
  }

  static async readMessage(messageID) {
    const response = await http.put(`/Chat/read-message/${messageID}`)
    return response.data
  }
}
