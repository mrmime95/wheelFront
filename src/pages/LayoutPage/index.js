import React from 'react'
import styled from 'styled-components'
import { CartProvider } from '../../context/cartContext'

import logo from '../../images/HeaderLogo.png'
import Header from '../../components/Header'

import RouteRenderer from '../../routes/RouteRenderer'
import { loggedInRoutes } from '../../routes/routeConfig'

const Page = styled.div`
  margin: 40px 0 0;
`

const StyledHeader = styled(Header)``

const Wrapper = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  background-color: white;
  background-color: transparent;
`

function LayoutPage() {
  return (
    <Page>
      <CartProvider>
        <Wrapper>
          <StyledHeader logo={logo} />
          <RouteRenderer routeConfig={loggedInRoutes} />
        </Wrapper>
      </CartProvider>
    </Page>
  )
}

export default LayoutPage
