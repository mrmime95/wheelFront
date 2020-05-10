import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
`

function CartItemLayout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

CartItemLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

const HeaderWrapper = styled.div`
  position: relative;
  padding: 5px;
`
const Column = styled.div`
  display: flex;
`
const HeaderColumn = styled(Column)`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 160px;
  &:first-child {
    max-width: auto;
  }
`

//TODO: here the hardcoded texts could come from props
export function CartItemHeader() {
  return (
    <HeaderWrapper>
      <CartItemLayout>
        <HeaderColumn>Product</HeaderColumn>
        <HeaderColumn>Quantity</HeaderColumn>
        <HeaderColumn>Unit price exclusive of VAT</HeaderColumn>
        <HeaderColumn>VAT Amount</HeaderColumn>
        <HeaderColumn>Total without VAT</HeaderColumn>
        <HeaderColumn>Total with VAT</HeaderColumn>
        <HeaderColumn>Remove</HeaderColumn>
      </CartItemLayout>
    </HeaderWrapper>
  )
}
