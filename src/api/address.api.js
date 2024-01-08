import { http } from "~/utils/axiosConfig"

export class AddressApi {
  static async getProvinces() {
    try {
      const response = await fetch('https://provinces.open-api.vn/api/')
      return response.json()
    } catch (error) {
      console.error(error)
    }
  }

  static async getDistricts(province_code) {
    try {
      const response = await fetch(`https://provinces.open-api.vn/api/p/${province_code}?depth=2`)
      return response.json()
    } catch (error) {
      console.error(error)
    }
  }

  static async getWards(district_code) {
    try {
      const response = await fetch(`https://provinces.open-api.vn/api/d/${district_code}?depth=2`)
      return response.json()
    } catch (error) {
      console.error(error)
    }
  }

  static async getUserAddresses(customerId) {
    try {
      const response = await http.get(`/DeliveryInfoes/get-all/${customerId}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  static async createNewAddress(body) {
    try {
      const response = await http.post(`/DeliveryInfoes/new-info`, body)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  static async setAnAddressAsDefault(customerId, priority) {
    try {
      const response = await http.put(`/DeliveryInfoes/set-default/${customerId}/${priority}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  static async deleteAnAddress(customerId, priority) {
    try {
      const response = await http.delete(`/DeliveryInfoes/delete/${customerId}/${priority}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}
