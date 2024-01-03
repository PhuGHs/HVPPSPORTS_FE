import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getUserFromLS } from '~/utils/auth'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => getUserFromLS())

  useEffect(() => {
    // If needed, perform additional logic related to user state here
  }, [user])
  return <UserContext.Provider value={{ user: user }}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
}
