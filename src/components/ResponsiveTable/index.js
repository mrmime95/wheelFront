import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Button from '../Button'
import TextField from '../Form/fields/TextField'
import Form from '../Form'
import { COLORS } from '../../utils/theme'
import { Able, AbleContainer } from '../Card'

import { ReactComponent as SummerIcon } from '../../components/icons/summer.svg'
import { ReactComponent as WinterIcon } from '../../components/icons/winter.svg'
import { ReactComponent as FuelIcon } from '../../components/icons/fuel.svg'
import { ReactComponent as RainIcon } from '../../components/icons/rain.svg'
import { ReactComponent as SoundIcon } from '../../components/icons/voice.svg'
import backgroundImg from '../../images/wheelHorizontal.png'

const Wrapper = styled.div`
  table,
  th {
    border-collapse: collapse;
  }
  th {
  }
  thead {
    th {
      text-align: left;
      height: 50px;
      padding: 0 20px;
      max-width: 160px;
      font-weight: 300;
      background-color: #f5f6f8;
      position: relative;
      &:before {
        content: '';
        width: 1px;
        position: absolute;
        top: 8px;
        bottom: 7px;
        left: 0;
        background-color: #d2d2d2;
      }
      &:first-child {
        text-align: center;
        max-width: none;
        &:before {
          display: none;
        }
      }
      &:last-child {
        font-weight: 700;
      }
    }
  }
  td {
    text-align: center;
    border-bottom: 1px solid #f5f6f8;

    &.product {
      padding: 15px 15px 5px 15px;
      display: flex;
      align-items: center;
      overflow: hidden;
      .title {
        text-align: left;
        padding: 0 50px 0 15px;
        & h6 {
          font-size: 2.7rem;
          font-weight: 700;
          line-height: 0.8;
        }
        & p {
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: 0.02em;
        }
      }
      .features-section {
        padding: 0 90px 0 0;
        position: relative;
        .features {
          text-align: left;
          font-size: 1.5rem;
          display: flex;
          justify-content: space-between;
          .features-more {
            .features-number {
              margin: 0 5px 0 0;
            }
          }
        }
        ${AbleContainer} {
          padding: 5px 0 0;
          ${Able} {
            width: 30px;
            height: 20px;
            padding: 5px;
            margin: 0 2px 0 0;
            font-size: 0.7rem;
          }
          .weather {
            margin: 0 0 0 15px;
            svg {
              width: 18px;
              height: 20px;
            }
          }
        }
        img {
          position: absolute;
          right: 0;
          bottom: 0;
          height: 100%;
          width: auto;
        }
      }
    }
    &.amount {
      form {
        width: 60px;
        margin: 0 auto;
        input {
          -moz-appearance: none; /* Firefox */
          -webkit-appearance: none; /* Safari and Chrome */
          text-align: center;
        }
      }
    }
  }

  .total {
    td {
      border-bottom: none;
      border-top: 2px solid ${COLORS.blue};
      .content {
        padding: 18px 0 0;
      }
      &:first-child {
        text-align: left;
        .content {
          padding: 18px 0 0 40px;
          color: ${COLORS.darkBlue};
        }
      }
    }
  }
`

const Error = styled.div`
  text-align: center;
  padding-top: 50px;
`

const StyledButton = styled(Button)`
  width: 15px;
  height: 15px;
  position: relative;
  background-color: ${COLORS.red};
  :before,
  :after {
    content: '';
    position: absolute;
    width: 16px;
    height: 1px;
    background-color: #ffffff;
    top: 10px;
  }

  :before {
    transform: rotate(45deg);
    left: 2px;
  }
  :after {
    transform: rotate(-45deg);
    right: 2px;
  }
`

//TODO: abstractize it
function ResponsiveTable({ data = [], error = false, errorText, header, onRemove, onAmountChanged, ...props }) {
  let totalWithoutVAT = 0
  let totalWithVAT = 0

  return (
    <Wrapper {...props}>
      {error ? (
        <Error>{errorText}</Error>
      ) : (
        <Table>
          {header && (
            <Thead>
              <Tr>
                {header.map((headerElement, index) => (
                  <Th key={index}>{headerElement}</Th>
                ))}
              </Tr>
            </Thead>
          )}
          <Tbody>
            {data.map((row, index) => {
              totalWithVAT += (row.newPrice + row.vat) * row.amount
              totalWithoutVAT += row.newPrice * row.amount
              return (
                <Tr key={row.id}>
                  <Td className="product">
                    <span>{index + 1}.</span>
                    <div className="title">
                      <h6>{row.title}</h6>
                      <p>{row.subtitle}</p>
                    </div>
                    <div className="features-section">
                      <div className="features">
                        <span>{row.type}</span>
                        <div className="features-more">
                          <span className="features-number">{row.number}</span>
                          <span>{row.letter}</span>
                        </div>
                      </div>
                      <div>
                        <AbleContainer>
                          <Able color="red">
                            <FuelIcon />
                            {row.fuel}
                          </Able>
                          <Able color="orange">
                            <RainIcon />
                            {row.rain}
                          </Able>
                          <Able color="hardDark">
                            <SoundIcon />
                            {row.sound}
                          </Able>
                          <div className="weather">{row.summer ? <SummerIcon /> : <WinterIcon />}</div>
                        </AbleContainer>
                      </div>
                      <img src={backgroundImg} alt="wheel background" />
                    </div>
                  </Td>
                  <Td className="amount">
                    <Form initialValues={{ amount: row.amount }} onSubmit={onAmountChanged}>
                      {({ handleChange, submitForm }) => (
                        <TextField
                          onChange={(e) => {
                            handleChange(e)
                            setTimeout(() => {
                              submitForm()
                            })
                          }}
                          type="number"
                          name="amount"
                        />
                      )}
                    </Form>
                  </Td>
                  <Td>{row.newPrice}</Td>
                  <Td>{row.vat * row.amount}</Td>
                  <Td>{row.newPrice * row.amount}</Td>
                  <Td>{(row.newPrice + row.vat) * row.amount}</Td>
                  <Td>
                    <StyledButton onClick={() => onRemove(row.id)}></StyledButton>
                  </Td>
                </Tr>
              )
            })}
            <Tr className="total">
              <Td>
                <div className="content">Total products</div>
              </Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>
                <div className="content">{`${totalWithoutVAT} RON`}</div>
              </Td>
              <Td>
                <div className="content">{`${totalWithVAT} RON`}</div>
              </Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      )}
    </Wrapper>
  )
}

ResponsiveTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  header: PropTypes.node,
  errorText: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
  onAmountChanged: PropTypes.func.isRequired,
}

export default ResponsiveTable
