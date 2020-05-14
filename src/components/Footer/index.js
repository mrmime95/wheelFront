import React from 'react'
import styled from 'styled-components'
import { tabletAndUp } from '../../utils/theme'

const Wrapper = styled.div`
  background-color: #010004;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div {
    width: 100%;
    max-width: 1530px;
    padding: 0 20px;
    ${tabletAndUp()} {
      padding: 0 40px;
    }
    margin: 0 auto;
  }
`

const CopyRight = styled.p`
  color: white;
  font-size: 1.4rem;
  font-weight: 400;
  span {
    font-weight: 700;
  }
  margin: 0;
`

function Footer({ ...props }) {
  return (
    <Wrapper {...props}>
      <div>
        <CopyRight>
          © 2019 <span>COGNITIVE CREATORS</span>
        </CopyRight>
      </div>
    </Wrapper>
  )
}

Footer.propTypes = {}

export default Footer
