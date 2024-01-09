import { http } from '~/utils/axiosConfig'

export class VoucherApi {
  static async getVouchers() {
    const response = await http.get('/Vouchers/filter-by?param=New')
    return response.data
  }
}
