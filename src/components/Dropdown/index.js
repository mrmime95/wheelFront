import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'
import { FONT_FAMILY } from '../../utils/theme'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  &:hover > div {
    display: block;
  }
  &:hover > button:after {
    transform: rotate(-135deg);
    bottom: 25%;
  }
`
//TODO: change color;
const TextButton = styled(Button)`
  font-size: 1.5rem;
  font-family: ${FONT_FAMILY.roboto};
  font-weight: bold;
  text-decoration: none;
  color: #212121;
  position: relative;
  padding: 0px 27px 0px 0;
  &:after {
    content: '';
    border: solid black;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 4px;
    position: absolute;
    right: -1px;

    transform: rotate(45deg);
  }
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  bottom: -100%;
`

function Dropdown({ children, text, ...props }) {
  return (
    <Wrapper {...props}>
      <TextButton variant="text">{text}</TextButton>
      <DropdownContent>{children}</DropdownContent>
    </Wrapper>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
}

export default Dropdown
