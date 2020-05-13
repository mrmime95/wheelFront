import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

function Form({
  children,
  onSubmit = () => {},
  initialValues = {},
  validateBeforeSubmit,
  enableReinitialize,
  validationshema,
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
      validationSchema={validationshema}
    >
      {({
        handleSubmit,
        submitForm,
        handleChange,
        handleBlur,
        touched,
        values,
        errors,
        dirty,
        setFieldValue,
        isValid,
      }) => {
        return (
          <form onSubmit={handleSubmit} noValidate={!!validateBeforeSubmit} {...props}>
            {children &&
              children({
                handleChange,
                handleBlur,
                submitForm,
                values,
                touched,
                errors,
                dirty,
                setFieldValue,
                isValid,
              })}
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
  validationshema: PropTypes.object,
}

export default Form
