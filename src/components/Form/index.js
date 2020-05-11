import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

function Form({
  children,
  onSubmit = () => {},
  initialValues = {},
  validateBeforeSubmit,
  enableReinitialize,
  ...props
}) {
  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validateBeforeSubmit || (() => {})}
      validateOnChange={!validateBeforeSubmit}
      validateOnBlur={!validateBeforeSubmit}
    >
      {({ handleSubmit, submitForm, handleChange, handleBlur, values, errors, dirty, setFieldValue }) => {
        return (
          <form onSubmit={handleSubmit} noValidate={!!validateBeforeSubmit} {...props}>
            {children && children({ handleChange, handleBlur, submitForm, values, errors, dirty, setFieldValue })}
          </form>
        )
      }}
    </Formik>
  )
}

Form.propTypes = {
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  validateBeforeSubmit: PropTypes.func,
  enableReinitialize: PropTypes.bool,
}

export default Form
