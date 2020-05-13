import React from 'react'
import PropTypes from 'prop-types'
import { Field as FormikField } from 'formik'
import styled from 'styled-components'
import FormField from '../FormField'
import { COLORS } from '../../../../utils/theme'

const StyledFormikField = styled(FormikField)`
  border-radius: 2px;
  box-shadow: 0px 0px 3px 0px rgba(43, 48, 61, 0.3) inset;
  font-size: 1.4rem;
  border: 1px solid ${COLORS.disabledGray};
  padding: 5px;
  width: 100%;
  color: inherit;
`

function TextField({
  placeholder,
  type = 'text',
  label,
  required,
  min,
  max,
  name,
  disabled = false,
  autoFocus,
  ...props
}) {
  return (
    <FormField label={label} disabled={disabled} {...props}>
      <StyledFormikField
        placeholder={placeholder}
        type={type}
        name={name}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        min={min}
        max={max}
      />
    </FormField>
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
  min: PropTypes.number,
  max: PropTypes.number,
  autoFocus: PropTypes.bool,
}

export function SearchField({ placeholder, type = 'text', required, name, disabled = false, autoFocus, ...props }) {
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

SearchField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
}

export default TextField
