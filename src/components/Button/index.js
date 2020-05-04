import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS, TRANSITION } from '../../utils/theme'

const primaryStyles = css`
  background-color: ${COLORS.activeBlue};
  &:hover {
    background-color: ${COLORS.lagoonBlue};
  }
`

const secondaryStyles = css`
  background-color: ${COLORS.gray};
  &:hover {
    background-color: ${COLORS.softDark};
  }
`

const textStyles = css`
  border: none;
  text-decoration: underline;
  color: ${COLORS.darkBlue};
  font-weight: 400;
  padding: 0;
  &:focus {
    outline: 0;
  }
`

const sharedStyles = css`
  display: inline-block;
  appearance: none;
  text-decoration: none;
  outline: none;
  padding: 10px;
  margin: 0;
  background: transparent;
  cursor: pointer;
  font-weight: bold;
  color: ${COLORS.white};
  border-radius: 5px;
  border: 1px solid;
  transition: color ${TRANSITION}, background ${TRANSITION}, border-color ${TRANSITION};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};

  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return secondaryStyles
      case 'text':
        return textStyles
      case 'primary':
      default:
        return primaryStyles
    }
  }}
`

const LinkWrapper = styled(Link)`
  ${sharedStyles}
`

const ButtonWrapper = styled.button`
  ${sharedStyles}
`

function Button({ children, variant = 'primary', to, lowercase, ...props }) {
  const Component = to ? LinkWrapper : ButtonWrapper

  return (
    <Component to={to} variant={variant} lowercase={lowercase} {...props}>
      {children}
    </Component>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'text']),
  to: PropTypes.string,
  lowercase: PropTypes.bool,
}

export default Button
