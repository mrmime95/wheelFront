import React from 'react'
import Dropdown from './index'
import CartList from './CartList'

export default {
  title: 'Dropdown',
}

const products = [
  { id: 0, title: 'Pirelli', subtitle: 'P Zero', type: '205/55/R16', price: 1, piece: 1 },
  { id: 1, title: 'Pirelli', subtitle: 'P Zero', type: '205/55/R16', price: 1.44, piece: 1 },
  { id: 2, title: 'Pirelli', subtitle: 'P Zero', type: '205/55/R16', price: 1.56, piece: 1 },
]

export const DefaultView = () => <Dropdown text="Dropdown">Dropdown content</Dropdown>

export const CartDropdown = () => (
  <Dropdown text="Dropdown" style={{ float: 'right' }}>
    <CartList products={products} />
  </Dropdown>
)
