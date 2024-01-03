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
}
