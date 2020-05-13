import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../utils/theme'

const Wrapper = styled.div`
  background-color: ${COLORS.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: ${COLORS.disabledGray};
  border: 2px dotted ${COLORS.disabledGray};
  margin: 50px;
  height: 300px;
`

function ThankYou() {
  return <Wrapper>Thank You</Wrapper>
}

export default ThankYou
