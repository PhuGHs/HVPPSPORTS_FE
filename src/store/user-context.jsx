import { createContext } from 'react'
import PropTypes from 'prop-types'
import { getUserFromLS } from '~/utils/auth'

const initialValue = {
  user: getUserFromLS(),
  setUser: () => null
}

export const UserContext = createContext(initialValue)

export const UserProvider = ({ children, defaultValue }) => {
  return <UserContext.Provider value={defaultValue || initialValue}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.object
}
