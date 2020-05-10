import React from 'react'
import TextField from './index'
import Form from '../../index'

export default {
  title: 'Form/Fields/TextField',
}

export const DefaultView = () => (
  <Form initialValues={{}}>{() => <TextField type="email" label="Email" name="email" />}</Form>
)
