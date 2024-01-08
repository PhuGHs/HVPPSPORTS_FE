import { http } from '~/utils/axiosConfig'
import qs from 'qs'

export class CategoryApi {
  static async getProductsByLeague(filters) {
    try {
      const response = await http.get('/Products/filter-by', {
        params: filters,
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        }
      })
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  static async getByGroups(key) {
    try {
      const response = await http.get(`/Products/get-by-groups?groups=${key}`)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
