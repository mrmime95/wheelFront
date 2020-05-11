import React from 'react'
import RadioButtons from './index'

const radioButtons = [
  {
    label: 'label1',
    value: '1',
  },
  {
    label: 'lavel2',
    value: '2',
  },
]

export default {
  title: 'RadioButtons',
}

export const DefaultView = () => <RadioButtons onChange={(value) => console.log(value)} radioButtons={radioButtons} />
export const ColumnView = () => (
  <RadioButtons onChange={(value) => console.log(value)} column radioButtons={radioButtons} />
)
