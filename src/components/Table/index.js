import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div``

const Error = styled.div`
  text-align: center;
  padding-top: 50px;
`

function Table({ data = [], error = false, errorText, header, children, ...props }) {
  return (
    <Wrapper {...props}>
      {header}
      {error ? <Error>{errorText}</Error> : data.map(children)}
    </Wrapper>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  header: PropTypes.node,
  errorText: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.func,
}

export default Table
