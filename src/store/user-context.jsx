import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getUserFromLS } from '~/utils/auth'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => getUserFromLS())
  const handleStorageChange = (event) => {
    if (event.key === 'user') {
      setUser(getUserFromLS())
    }
  }

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])
  return <UserContext.Provider value={{ user: user }}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
}
