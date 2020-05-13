import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import API, { setAuthToken } from '../utils/API'

const CartContext = React.createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const functions = {}

  return <CartContext.Provider value={{ cart, functions }}>{children}</CartContext.Provider>
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CartContext
