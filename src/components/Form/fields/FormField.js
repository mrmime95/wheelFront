import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../../utils/theme'

const Wrapper = styled.div`
  position: relative;
  font-size: 1.1rem;
  font-weight: 500;
`

const Label = styled.span`
  display: block;
  color: ${COLORS.black};
  margin-bottom: 10px;
`

export const ValidationError = styled.small`
  color: red;
  font-weight: normal;
  display: block;
  position: absolute;
`

function FormField({ label, error, required, children, ...props }) {
  return (
    <Wrapper {...props}>
      <label>
        {label && <Label isRequired={required}>{label}</Label>}
        {children}
      </label>
      {error && <ValidationError>{error}</ValidationError>}
    </Wrapper>
  )
}

FormField.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
}

export default FormField
