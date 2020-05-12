import React, { useState } from 'react'
import styled from 'styled-components'

import logo from '../../images/HeaderLogo.png'
import Header from '../../components/Header'
import ResponsiveTable from '../../components/ResponsiveTable'
import CheckoutForm from '../../components/CheckoutForm'
import TextArea from '../../components/Form/fields/TextArea'
import TextField from '../../components/Form/fields/TextField'
import RadioButtonsField from '../../components/Form/fields/RadioButtonsField'

import { COLORS } from '../../utils/theme'
import backgroundImg from '../../images/BackgroundCos.jpg'

const data = [
  {
    id: 0,
    title: 'Pirelli',
    subtitle: 'P Zero',
    summer: true,
    type: '205/55/R16',
    number: 82,
    letter: 'T',
    fuel: 'g',
    rain: 'e',
    sound: 73,
    oldPrice: 475.0,
    newPrice: 475.0,
    pieceNumber: 4,
    vat: 20.33,
    amount: 2,
  },
  {
    id: 3,
    title: 'Pirelli',
    subtitle: 'P Zero',
    summer: true,
    type: '205/55/R16',
    number: 82,
    letter: 'T',
    fuel: 'g',
    rain: 'e',
    sound: 73,
    oldPrice: 475.0,
    newPrice: 475.0,
    pieceNumber: 4,
    vat: 20.33,
    amount: 2,
  },
  {
    id: 4,
    title: 'Pirelli',
    subtitle: 'P Zero',
    summer: true,
    type: '205/55/R16',
    number: 82,
    letter: 'T',
    fuel: 'g',
    rain: 'e',
    sound: 73,
    oldPrice: 475.0,
    newPrice: 475.0,
    pieceNumber: 4,
    vat: 20.33,
    amount: 2,
  },
  {
    id: 5,
    title: 'Pirelli',
    subtitle: 'P Zero',
    summer: true,
    type: '205/55/R16',
    number: 82,
    letter: 'T',
    fuel: 'g',
    rain: 'e',
    sound: 73,
    oldPrice: 475.0,
    newPrice: 475.0,
    pieceNumber: 4,
    vat: 20.33,
    amount: 2,
  },
  {
    id: 6,
    title: 'Pirelli',
    subtitle: 'P Zero',
    summer: true,
    type: '205/55/R16',
    number: 82,
    letter: 'T',
    fuel: 'g',
    rain: 'e',
    sound: 73,
    oldPrice: 475.0,
    newPrice: 475.0,
    pieceNumber: 4,
    vat: 20.33,
    amount: 2,
  },
  {
    id: 7,
    title: 'Pirelli',
    subtitle: 'P Zero',
    summer: true,
    type: '205/55/R16',
    number: 82,
    letter: 'T',
    fuel: 'g',
    rain: 'e',
    sound: 73,
    oldPrice: 475.0,
    newPrice: 475.0,
    pieceNumber: 4,
    vat: 20.33,
    amount: 2,
  },
  {
    id: 8,
    title: 'Pirelli',
    subtitle: 'P Zero',
    summer: true,
    type: '205/55/R16',
    number: 82,
    letter: 'T',
    fuel: 'g',
    rain: 'e',
    sound: 73,
    oldPrice: 475.0,
    newPrice: 475.0,
    pieceNumber: 4,
    vat: 20.33,
    amount: 2,
  },
  {
    id: 9,
    title: 'Pirelli',
    subtitle: 'P Zero',
    summer: true,
    type: '205/55/R16',
    number: 82,
    letter: 'T',
    fuel: 'g',
    rain: 'e',
    sound: 73,
    oldPrice: 475.0,
    newPrice: 475.0,
    pieceNumber: 4,
    vat: 20.33,
    amount: 2,
  },
  {
    id: 10,
    title: 'Pirelli',
    subtitle: 'P Zero',
    summer: true,
    type: '205/55/R16',
    number: 82,
    letter: 'T',
    fuel: 'g',
    rain: 'e',
    sound: 73,
    oldPrice: 475.0,
    newPrice: 475.0,
    pieceNumber: 4,
    vat: 20.33,
    amount: 2,
  },
]

const header = [
  'Product',
  'Quantity',
  'Unit price exclusive of VAT',
  'VAT Amount',
  'Total without VAT',
  'Total with VAT',
  'Remove',
]

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

const SectionWrapper = styled.div`
  padding: 0 150px;
`

const TableSection = styled.section`
  padding: 60px 0 50px;
`
const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
  padding: 0 0 0 40px;
  margin: 0 0 25px;
  color: ${COLORS.black};
`

const StepperContainer = styled.div`
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
`

const StyledRadioButtonsField = styled(RadioButtonsField)`
  label span {
    margin: 0 10px;
    font-size: 1.1rem;
  }
`

const steps = [
  {
    title: 'Billing Address',
    children: (
      <>
        <StyledRadioButtonsField
          radioButtons={[
            { label: 'Individual Person', value: 'indiv' },
            { label: 'Legal', value: 'legal' },
          ]}
          name="personType"
        />
        <TextField label="Name" name="name" />
        <TextField label="First name" name="firstName" />
        <TextField type="email" label="E-mail" name="email" />
        <TextArea label="Address" name="address" />
        <TextField label="IBAN" name="iban" />
        <TextField label="Bank" name="bank" />
        <TextField label="Registration Number" name="registrationNumber" />
      </>
    ),
    onSubmit: (value) => {
      console.log(value)
    },
    initialValues: {
      personType: '',
      name: '',
      firstName: '',
      email: '',
      address: '',
      iban: '',
      bank: '',
      registrationNumber: '',
    },
  },
  {
    title: 'Method of delivery',
    children: (
      <>
        <RadioButtonsField
          label="Method of delivery:"
          column
          radioButtons={[
            { label: 'Pickup from a deposit', value: 'pickup' },
            { label: 'Express delivery', value: 'express' },
          ]}
          name="deliveryMethod"
        />
      </>
    ),
    onSubmit: (value) => {
      console.log(value)
    },
    initialValues: {
      deliveryMethod: 'express',
    },
  },
  {
    title: 'Finalize ordery',
    children: (
      <>
        <RadioButtonsField
          label="Payment method:"
          column
          radioButtons={[
            { label: 'Cash on delivery/pickup', value: 'cash' },
            { label: 'Credit card', value: 'card' },
            { label: 'Payment order', value: 'payment' },
          ]}
          name="paymentMethod"
        />
        <RadioButtonsField
          column
          radioButtons={[{ label: 'I agree with the Terms and conditions', value: 'agree' }]}
          name="termsAgree"
        />
      </>
    ),
    onSubmit: (value) => {
      console.log(value)
    },
    initialValues: {
      paymentMethod: 'express',
      termsAgree: '',
    },
  },
]

function Cart() {
  const [activeStep] = useState(0)
  return (
    <Page>
      <BackgroundImage src={backgroundImg} alt="car background"></BackgroundImage>
      <Wrapper>
        <StyledHeader logo={logo} />
        <SectionWrapper>
          <TableSection>
            <Title>Shopping cart summary:</Title>
            <ResponsiveTable
              header={header}
              data={data}
              onRemove={(value) => console.log(value)}
              onAmountChanged={(value) => console.log(value)}
            />
          </TableSection>
          <section>
            <Title>Finalize your order in just three steps</Title>
            <StepperContainer>
              <StepperForms>
                {steps.map((step, index) => (
                  <CheckoutForm
                    key={index}
                    isActive={index === activeStep}
                    index={index + 1}
                    title={step.title}
                    initialValues={step.initialValues}
                    onSubmit={step.onSubmit}
                  >
                    {step.children}
                  </CheckoutForm>
                ))}
              </StepperForms>
            </StepperContainer>
          </section>
        </SectionWrapper>
      </Wrapper>
    </Page>
  )
}

export default Cart
