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
        console.log('token: ', this._token)
        if (this._token && config.headers) {
          config.headers.Authorization = this._token
          return config
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
        console.log('url: ', url)
        if (url === '/Accounts/login') {
          const data = response.data.data
          console.log('data: ', data)
          this._token('Bearer ' + data.access_token)
          // setTokenToLS('Bearer ' + data.token)
          setTokenToLS(this._token)
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
