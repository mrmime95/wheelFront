import React, { useState } from 'react'
import styled from 'styled-components'

import logo from '../../images/HeaderLogo.png'
import Header from '../../components/Header'
import Table from '../../components/Table'
import { CartItemHeader } from '../../components/Table/CartItem'

import { COLORS, FONT_FAMILY, TRANSITION } from '../../utils/theme'
import backgroundImg from '../../images/BackgroundCos.jpg'

const Page = styled.div`
  margin: 40px 0 0;
  background-color: ${COLORS.white};
`

const StyledHeader = styled(Header)``

const BackgroundImage = styled.img`
  position: absolute;
  height: 930px;
  left: 0;
  top: 0;
  z-index: -1;
  object-fit: cover;
`

const Wrapper = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  background-color: white;
`

const TableSection = styled.section`
  padding: 60px 0 0;
`
const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 25px;
  color: ${COLORS.black};
`

const StepperContainer = styled.div`
  padding: 0 150px;
  position: relative;
  :before {
    position: absolute;
    content: '';
    top: 22px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${COLORS.blue};
  }
`

const StepperForms = styled.div`
    display: flex;
    justify-content: space-around;
}`

const Step = styled.div`
  border: 1px solid ${COLORS.blue};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: ${COLORS.white};
  z-index: 1;
  font-size: 2.4rem;
  line-height: 1;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? COLORS.black : COLORS.disabledGray)};
`

function Cart() {
  const steps = [1, 2, 3]
  const [activeStep, setActiveStep] = useState(0)
  return (
    <Page>
      <BackgroundImage src={backgroundImg} alt="car background"></BackgroundImage>
      <Wrapper>
        <StyledHeader logo={logo} />
        <TableSection>
          <Title>Shopping cart summary:</Title>
          <Table header={<CartItemHeader />} data={[]}>
            {() => <></>}
          </Table>
        </TableSection>
        <section>
          <Title>Finalize your order in just three steps</Title>
          <StepperContainer>
            <StepperForms>
              {steps.map((step, index) => (
                <Step key={index} active={activeStep >= index}>
                  {index + 1}
                </Step>
              ))}
            </StepperForms>
          </StepperContainer>
        </section>
      </Wrapper>
    </Page>
  )
}

export default Cart
