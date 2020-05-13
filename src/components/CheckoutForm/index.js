import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'
import Form from '../Form'
import { COLORS } from '../../utils/theme'

const Wrapper = styled.div`
  z-index: 1;
  display: inline-block;
  ${({ isActive }) => !isActive && `color: ${COLORS.disabledGray}`};
  h6 {
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
    margin: 10px 0 50px;
  }
`

const Step = styled.div`
  border: 1px solid ${COLORS.blue};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: ${COLORS.white};
  z-index: 1;
  font-size: 2.4rem;
  line-height: 1;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? COLORS.black : COLORS.disabledGray)};
  margin: 0 auto;
`

const StyledButton = styled(Button)`
  padding: 10px 20px;
  font-weight: 400;
  font-size: 1.15rem;
`

const FormWrapper = styled.div`
  background-color: ${({ isActive }) => (isActive ? '#f5f6f8' : COLORS.white)};
  padding: 18px 25px;
  margin: 0 0 15px;

  border-radius: 2px;

  & > div {
    margin: 0 0 15px;
    width: 200px;
  }
`

function CheckoutForm({ index, isActive, title, initialValues, onSubmit, validationshema, children, ...props }) {
  return (
    <Wrapper {...props} isActive={isActive}>
      <Step active={isActive}>{index}</Step>
      <h6>{title}</h6>

      <Form initialValues={initialValues} validationshema={validationshema} onSubmit={onSubmit}>
        {({ errors, values }) => (
          <>
            <FormWrapper isActive={isActive}>{children}</FormWrapper>
            {Object.keys(errors).every((k) => !errors[k]) &&
              Object.keys(initialValues).every((k) => values[k] !== '') &&
              isActive && <StyledButton type="submit">Continue</StyledButton>}
          </>
        )}
      </Form>
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
