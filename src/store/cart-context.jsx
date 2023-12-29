import { createContext } from 'react'
import PropTypes from 'prop-types'

const initialValue = {
  items: []
}

export const CartContext = createContext(initialValue)

export const CartProvider = ({ children, defaultValue }) => {
  return <CartContext.Provider value={defaultValue || initialValue}>{children}</CartContext.Provider>
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.shape({
    items: PropTypes.array.isRequired
  })
}
