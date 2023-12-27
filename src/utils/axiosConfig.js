import axios from 'axios'
import { baseURL } from './sharedResource'
import { getTokenFromLS, removeTokenFromLS, setTokenToLS } from './lsMethod'
import { SIGN_IN_URL, SIGN_OUT_URL } from '~/api/auth.api'

class Http {
  constructor() {
    this._token = getTokenFromLS()
    this.instance = axios.create({
      baseURL,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })

    this.instance.interceptors.request.use((config) => {
      if (this._token && config.headers) {
        config.headers.Authorization = this._token
      }
    })

    this.instance.interceptors.response.use((response) => {
      const { url } = response.config
      if (url === SIGN_IN_URL) {
        const data = response.data
        setTokenToLS(data.token)
      } else if (url === SIGN_OUT_URL) {
        this._token = ''
        removeTokenFromLS()
      }
      return response
    })
  }
}

export const http = new Http().instance
