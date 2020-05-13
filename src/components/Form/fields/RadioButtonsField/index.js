import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import RadioButtons from '../../../RadioButtons'
import FormField from '../FormField'
import styled from 'styled-components'

const StyledRadioButtons = styled(RadioButtons)`
  label > span {
    font-size: 1.4rem;
  }
`

function RadioButtonsField({ name, label, disabled = false, ...props }) {
  return (
    <FormField label={label} disabled={disabled}>
      <Field name={name}>
        {({ field, form }) => (
          <StyledRadioButtons
            value={form.values[name]}
            onChange={(value) => {
              form.setFieldValue(field.name, value)
            }}
            disabled={disabled}
            {...props}
          />
        )}
      </Field>
    </FormField>
  )
}

RadioButtonsField.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
}

export default RadioButtonsField
