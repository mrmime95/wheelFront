import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'
import { FONT_FAMILY, COLORS } from '../../utils/theme'

import useClickOutside from '../../hooks/useClickOutside'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
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
  background-color: transparent;
  &:after {
    content: '';
    border: solid ${COLORS.blue};
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    position: absolute;
    right: 2px;

    transform: rotate(45deg);
    ${({ open }) => open && 'transform: translateY(50%) rotate(-135deg)'}
  }
`

const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  transform: translateY(15px);
  color: ${COLORS.black};
  z-index: 1;
`

//TODO: Add icon
function Dropdown({ children, text, ...props }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const ref = useRef()
  useClickOutside(ref, toggle)

  function toggle() {
    setMenuIsVisible(!menuIsVisible)
  }
  return (
    <Wrapper {...props}>
      <TextButton variant="text" onClick={toggle} open={menuIsVisible}>
        {text}
      </TextButton>
      {menuIsVisible && (
        <DropdownContent ref={ref} onClick={(e) => e.stopPropagation()}>
          {children}
        </DropdownContent>
      )}
    </Wrapper>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
}

export default Dropdown
