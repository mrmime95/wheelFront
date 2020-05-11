import React from 'react'
import PropTypes from 'prop-types'
import { Field as FormikField } from 'formik'
import styled from 'styled-components'
import { COLORS } from '../../../../utils/theme'
import FormField from '../FormField'

const StyledFormikField = styled(FormikField)`
  border-radius: 2px;
  box-shadow: 0px 0px 3px 0px rgba(43, 48, 61, 0.3) inset;
  font-size: 1.4rem;
  border: 1px solid ${COLORS.disabledGray};
  width: 100%;
  color: ${COLORS.black};
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  padding: 5px 10px;
  position: relative;
`
const StyledFormField = styled(FormField)`
  &:after {
    content: '';
    border: solid #000000;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    position: absolute;
    right: 20px;
    top: 40%;
    transform: rotate(45deg) translateX(-50%);
  }
`

function SelectField({ placeholder, required, name, disabled = false, autoFocus, options, ...props }) {
  return (
    <StyledFormField {...props}>
      <StyledFormikField
        placeholder={placeholder}
        name={name}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        onClick={(e) => e.preventDefault()}
        component="select"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledFormikField>
    </StyledFormField>
  )
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  debounceDelay: PropTypes.number,
  autoFocus: PropTypes.bool,
  options: PropTypes.any.isRequired,
}

export default SelectField
