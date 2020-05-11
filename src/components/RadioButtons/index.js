import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../utils/theme'

const Wrapper = styled.div`
  ${({ column }) =>
    column &&
    `
    display:flex; 
    flex-direction: column;
  `};
`

const RadioButtonWrapper = styled.label`
  cursor: pointer;
`

const RadioButtonLabel = styled.span`
  font-size: 1.1rem;
  color: ${COLORS.black};
  font-weight: 500;
  margin: 0 5px 5px 5px;
`

function RadioButtons({ radioButtons, onChange, value, column, ...props }) {
  return (
    <Wrapper {...props} column={column}>
      {radioButtons.map((radioButton) => (
        <RadioButtonWrapper key={radioButton.value}>
          <input
            type="radio"
            value={radioButton.value}
            checked={radioButton.value === value}
            onChange={() => onChange(radioButton.value)}
          />
          <RadioButtonLabel>{radioButton.label}</RadioButtonLabel>
        </RadioButtonWrapper>
      ))}
    </Wrapper>
  )
}

RadioButtons.propTypes = {
  radioButtons: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  column: PropTypes.bool,
}

export default RadioButtons
