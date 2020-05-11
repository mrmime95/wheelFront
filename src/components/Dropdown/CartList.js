import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { twoDecimals } from '../../utils/number'
import Button from '../Button'

const Wrapper = styled.div`
  padding: 10px;
  width: 300px;
  text-align: center;
`

const Row = styled.tr`
  padding: 10px 10px 15px;
  font-size: 1.4rem;
  td:nth-child(2) {
    text-align: center;
  }
  td:last-child,
  th:last-child {
    text-align: right;
  }
  td:first-child,
  th:first-child {
    text-align: left;
  }
  th {
    font-weight: 300;
  }
  td {
    height: 50px;
    font-weight: bold;
  }
`

const Table = styled.table`
  width: 100%;
  &,
  th,
  td {
    border-collapse: collapse;
    padding: 10px;
  }
  ${Row}:nth-child(even) {
    background-color: #eee;
  }
`

const StyledButton = styled(Button)`
  padding: 15px 50px;
  font-size: 1.4rem;
  font-weight: bold;
`

function CartList({ products, ...props }) {
  let total = 0
  return (
    <Wrapper {...props}>
      <Table>
        <thead>
          <Row>
            <th>Produs</th>
            <th>Cant.</th>
            <th>Pret</th>
          </Row>
        </thead>
        <tbody>
          {products.map((product) => {
            total += product.price * product.piece
            return (
              <Row key={product.id}>
                <td>
                  <p>
                    <strong>{`${product.title} - `}</strong> {product.subtitle}
                  </p>
                  <p>{product.type}</p>
                </td>
                <td>{product.piece}</td>
                <td>{`${twoDecimals(product.price)} lei`}</td>
              </Row>
            )
          })}
          <Row>
            <td>Total</td>
            <td colSpan="3">{`${twoDecimals(total)} lei`}</td>
          </Row>
        </tbody>
      </Table>
      <StyledButton to="/cart" uppercase>
        Check out
      </StyledButton>
    </Wrapper>
  )
}

CartList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      piece: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default CartList
