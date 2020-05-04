import React from 'react'
import Button from './index'

export default {
  title: 'Button',
}

export const DefaultView = () => <Button>Primary button</Button>

export const Secondary = () => <Button variant="secondary">Secondary button</Button>

export const TextButton = () => <Button variant="text">Text button</Button>

export const LinkButton = () => <Button to="/">Link button</Button>
