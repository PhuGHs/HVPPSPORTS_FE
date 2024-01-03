import { createContext, useContext, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { CartApi } from '~/api/cart.api'
import { UserContext } from './user-context'

export const CartContext = createContext()

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    console.log(action)
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.productID === action.item.productID && item.size === action.item.size
    )

    const updatedItems = [...state.items]
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex]
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      }
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems.push({ ...action.item, quantity: action.item.quantity })
    }
    return { ...state, items: updatedItems }
  }
  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
    const existingItem = state.items[existingCartItemIndex]
    const updatedItems = [...state.items]
    if (existingItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1)
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1
      }
      updatedItems[existingCartItemIndex] = updatedItem
    }

    return { ...state, items: updatedItems }
  }
  if (action.type === 'SET_ITEMS') {
    return { ...state, items: action.items }
  }

  return state
}

export const CartProvider = ({ children }) => {
  const { user } = useContext(UserContext)
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })
  useEffect(() => {
    const fetch = async () => {
      const data = await CartApi.getCarts(user.id)
      dispatchCartAction({ type: 'SET_ITEMS', items: data })
    }
    fetch()
  }, [])

  async function addItem(item) {
    try {
      await CartApi.addToCart({
        customerID: user.id,
        productID: item.productID,
        size: item.size,
        quantity: item.quantity
      })
    } catch (error) {
      console.error(error)
    } finally {
      const data = {
        customerID: user.id,
        productID: item.productID,
        size: item.size,
        quantity: item.quantity,
        customer: user,
        product: item.product
      }
      console.log(data)
      dispatchCartAction({ type: 'ADD_ITEM', item: data })
    }
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id })
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem
  }
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}
