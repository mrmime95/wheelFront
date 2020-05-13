import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { twoDecimals } from '../../utils/number'
import Button from '../Button'

const Wrapper = styled.div`
  z-index: 2;
  padding: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.13);
  border-radius: 3px;
  position: relative;
  background-color: white;
  :before {
    position: absolute;
    content: '';
    top: 0;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
    right: 19px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
  }
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
    span {
      font-weight: normal;
    }
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
  text-transform: uppercase;
`

function CartList({ products, ...props }) {
  let total = 0
  console.log(products)
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
                  <div>
                    {`${product.title} - `}
                    <span>{product.subtitle}</span>
                  </div>
                  <div>
                    <span>{product.type}</span>
                  </div>
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
      <StyledButton to="/cart">Check out</StyledButton>
    </Wrapper>
  )
}

CartList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      piece: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default CartList
