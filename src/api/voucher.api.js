import { http } from '~/utils/axiosConfig'

export class VoucherApi {
  static async getVouchers() {
    const response = await http.get('/Vouchers/filter-by?param=new')
    return response.data
  }
}
