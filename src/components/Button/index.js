import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS, TRANSITION, FONT_FAMILY } from '../../utils/theme'

const primaryStyles = css`
  background-color: ${COLORS.blue};
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15);
  font-family: ${FONT_FAMILY.roboto};
  &:hover {
    box-shadow: 0px 0px 4px 0px rgba(43, 48, 61, 0.3) inset;
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
  cursor: pointer;
  color: ${COLORS.white};
  transition: box-shadow ${TRANSITION};
  border-radius: 2px;
  border: none;
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};

  ${({ variant }) => {
    switch (variant) {
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
  variant: PropTypes.oneOf(['primary', 'text']),
  to: PropTypes.string,
  lowercase: PropTypes.bool,
}

export default Button
