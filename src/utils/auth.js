import { redirect } from 'react-router-dom'
import { SIGN_IN_URL } from '~/api/auth.api'

export const getTokenFromLS = () => {
  const token = localStorage.getItem('token')
  return token
}

export const setUserToLS = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromLS = () => {
  const user = localStorage.getItem('user')
  return JSON.parse(user)
}

export const removeUserFromLS = () => {
  localStorage.removeItem('user')
}

export const setTokenToLS = (token) => {
  localStorage.setItem('token', token)
}

export const removeTokenFromLS = (token) => {
  localStorage.removeItem('token', token)
}

export const checkAuthLoader = () => {
  const token = getTokenFromLS()

  if (!token) {
    return redirect(SIGN_IN_URL)
  }

  return null
}
