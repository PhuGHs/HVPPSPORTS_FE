import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ChatbotContext = createContext()

export const ChatbotProvider = ({ children }) => {
  const [chatbotMessages, setChatbotMessages] = useState([])

  return <ChatbotContext.Provider value={{ chatbotMessages, setChatbotMessages }}>{children}</ChatbotContext.Provider>
}

ChatbotProvider.propTypes = {
  children: PropTypes.node.isRequired
}
