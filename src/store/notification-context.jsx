import { createContext, useState } from 'react'

const NotificationContext = createContext({
  notification: null,
  notificationText: null,
  success: () => {},
  error: () => {}
})

const STATES = {
  SUCCESS: 'success',
  ERROR: 'error'
}

// eslint-disable-next-line react/prop-types
const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null)
  const [notificationText, setNotificationText] = useState(null)

  const success = (text) => {
    window.scrollTo(0, 0)
    setNotificationText(text)
    setNotification(STATES.SUCCESS)
  }

  const error = (text) => {
    window.scrollTo(0, 0)
    setNotification(STATES.ERROR)
    setNotificationText(text)
  }

  const clear = () => {
    setNotificationText(null)
    setNotification(null)
  }

  return (
    <NotificationContext.Provider value={{ success, error, clear, notification, notificationText }}>
      {children}
    </NotificationContext.Provider>
  )
}

export { NotificationProvider }
export default NotificationContext
