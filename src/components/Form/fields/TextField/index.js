import React from 'react'
import PropTypes from 'prop-types'
import { Field as FormikField } from 'formik'
import styled from 'styled-components'
import { COLORS, TRANSITION } from '../../../../utils/theme'

const StyledFormikField = styled(FormikField)`
  width: 100%;
  background-color: white;
  border-radius: 0;
  border: solid 1px ${COLORS.grayBlue};
  padding: 6px 12px;
  transition: border-color ${TRANSITION}, box-shadow ${TRANSITION};
  line-height: 1.5;
  box-shadow: none;
  height: 36px;
  ${({ disabled }) =>
    disabled &&
    `
      color: ${COLORS.softDark};
      border: none;
      padding: 0;
    `}
`

function TextField({ placeholder, type = 'text', required, name, disabled = false, autoFocus, ...props }) {
  return (
    <StyledFormikField
      placeholder={placeholder}
      type={type}
      name={name}
      required={required}
      disabled={disabled}
      autoFocus={autoFocus}
      {...props}
    />
  )
}

TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  debounceDelay: PropTypes.number,
  autoFocus: PropTypes.bool,
}

export default TextField
