import React from 'react'
import RadioButtonsField from './index'
import Form from '../../index'

const radioButtons = [
  {
    label: 'label1',
    value: '1',
  },
  {
    label: 'label2',
    value: '2',
  },
]

export default {
  title: 'Form/Fields/RadioButtonsField',
}

export const DefaultView = () => (
  <Form initialValues={{ radioButtons: '' }}>
    {() => <RadioButtonsField label="Role" radioButtons={radioButtons} name="radioButtons" required />}
  </Form>
)
