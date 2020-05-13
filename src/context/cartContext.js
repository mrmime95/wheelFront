import React, { useState } from 'react'
import PropTypes from 'prop-types'
import API from '../utils/API'

const CartContext = React.createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const functions = { addToCart, removeFromCart, changeAmount, getProductIndexById, sendCheckout }
  //TODO: save cart to localstorage by email;
  return <CartContext.Provider value={{ cart, functions }}>{children}</CartContext.Provider>

  function addToCart(product, amount) {
    if (amount) {
      const tempCart = [...cart]

      const current = tempCart.find((currentProduct) => currentProduct.id === product.id)
      current ? (current.amount += amount) : tempCart.push({ ...product, amount })

      setCart(tempCart)
    }
  }

  function removeFromCart(id) {
    const tempCart = [...cart]
    setCart(tempCart.filter((cartProduct) => cartProduct.id !== id))
  }

  function changeAmount(id, amount) {
    const tempCart = [...cart]
    const current = tempCart.find((currentProduct) => currentProduct.id === id)
    if (amount <= current.pieceNumber && amount > 0) {
      current.amount = amount
    }
    setCart(tempCart)
  }

  function getProductIndexById(id) {
    return cart.findIndex((cartProduct) => cartProduct.id === id)
  }

  async function sendCheckout(personData) {
    try {
      const products = {}
      cart.forEach((product) => (products[product.id] = product.amount))
      await API.checkout.post({ ...personData, products })
      clearData()
      return true
    } catch (e) {
      alert(e.errors.email)
      return false
    }
  }

  function clearData() {
    setCart([])
  }
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CartContext
