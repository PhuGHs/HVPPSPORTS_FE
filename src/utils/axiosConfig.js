import axios from 'axios'
import { baseURL } from './sharedResource'
import { getTokenFromLS, setTokenToLS, removeTokenFromLS } from './auth'
import { SIGN_IN_URL, SIGN_OUT_URL } from '~/api/auth.api'

class Http {
  constructor() {
    this._token = getTokenFromLS()
    this.instance = axios.create({
      baseURL,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this._token && config.headers) {
          config.headers.Authorization = this._token
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === SIGN_IN_URL) {
          const data = response.data
          console.log(data)
          setTokenToLS('Bearer ' + data.access_token)
        } else if (url === SIGN_OUT_URL) {
          this._token = ''
          removeTokenFromLS()
        }
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}

export const http = new Http().instance

class HttpChatbot {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://chatbot-hvpp-sports.vercel.app/',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export const httpChatbot = new HttpChatbot().instance
