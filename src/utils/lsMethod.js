export const getTokenFromLS = () => {
  const token = localStorage.getItem('token')
  return token
}

export const setTokenToLS = (token) => {
  localStorage.setItem('token', token)
}

export const removeTokenFromLS = (token) => {
  localStorage.removeItem('token', token)
}
