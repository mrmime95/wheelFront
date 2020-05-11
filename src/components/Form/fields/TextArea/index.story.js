import React from 'react'
import TextArea from './index'
import Form from '../../index'

export default {
  title: 'Form/Fields/TextArea',
}

export const DefaultView = () => (
  <Form initialValues={{ email: '' }}>{() => <TextArea type="email" label="Email" name="email" />}</Form>
)
