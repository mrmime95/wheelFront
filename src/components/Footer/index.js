import React from 'react'
import PropTypes from 'prop-types'
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

function CheckoutForm({ ...props }) {
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

CheckoutForm.propTypes = {
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  initialValues: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  validationshema: PropTypes.any,
}

export default CheckoutForm
