import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import ResponsiveTable from '../../components/ResponsiveTable'
import CheckoutForm from '../../components/CheckoutForm'
import TextArea from '../../components/Form/fields/TextArea'
import TextField from '../../components/Form/fields/TextField'
import RadioButtonsField from '../../components/Form/fields/RadioButtonsField'

import CartContext from '../../context/cartContext'
import { COLORS } from '../../utils/theme'
import backgroundImg from '../../images/BackgroundCos.jpg'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom'

const header = [
  'Product',
  'Quantity',
  'Unit price exclusive of VAT',
  'VAT Amount',
  'Total without VAT',
  'Total with VAT',
  'Remove',
]

const BackgroundImage = styled.img`
  position: absolute;
  height: 930px;
  left: 0;
  top: 0;
  z-index: -1;
  object-fit: cover;
`

const Wrapper = styled.div`
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
  justify-content: center;
  flex-wrap: wrap;
`

const StyledRadioButtonsField = styled(RadioButtonsField)`
  label span {
    margin: 0 10px;
    font-size: 1.1rem;
  }
`

const WhiteBackground = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${COLORS.white};
  margin: 40px 0 0;
  height: 930px;
`

const StyledCheckoutForm = styled(CheckoutForm)`
  margin: 0 35px;
`

function Cart() {
  const [activeStep, setActiveStep] = useState(0)
  const [personData, setPersonData] = useState({})
  const cart = useContext(CartContext).cart
  const history = useHistory()

  const { removeFromCart, changeAmount, sendCheckout } = useContext(CartContext).functions
  const steps = [
    {
      title: 'Billing Address',
      onSubmit: (values) => {
        if (Object.keys(values).every((k) => values[k] !== '')) {
          setPersonData({ ...personData, ...values })
        }
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
      validationShema: Yup.object().shape({
        personType: Yup.string().required('Required'),
        name: Yup.string().required('Required'),
        firstName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        address: Yup.string().required('Required'),
        iban: Yup.string().required('Required'),
        bank: Yup.string().required('Required'),
        registrationNumber: Yup.string().required('Required'),
      }),
    },
    {
      title: 'Method of delivery',
      onSubmit: (values) => {
        if (Object.keys(values).every((k) => values[k] !== '')) {
          setPersonData({ ...personData, ...values })
        }
      },
      initialValues: {
        deliveryMethod: 'express',
      },
      validationShema: Yup.object().shape({
        deliveryMethod: Yup.string().required('Required'),
      }),
    },
    {
      title: 'Finalize ordery',
      onSubmit: async (values) => {
        if (Object.keys(values).every((k) => values[k] !== '')) {
          setPersonData({})
          const checkoutSent = sendCheckout({ ...personData, ...values })
          if (checkoutSent) {
            console.log('Sent')
            history.push('/thank-you')
          }
        }
      },
      initialValues: {
        paymentMethod: 'express',
        termsAgree: '',
        comments: '',
      },
      validationShema: Yup.object().shape({
        paymentMethod: Yup.string().required('Required'),
        termsAgree: Yup.string().required('Required'),
        comments: Yup.string().required('Required'),
      }),
    },
  ]
  return (
    <Wrapper>
      <BackgroundImage src={backgroundImg} alt="car background"></BackgroundImage>
      <WhiteBackground></WhiteBackground>
      <SectionWrapper>
        <TableSection>
          <Title>Shopping cart summary:</Title>
          <ResponsiveTable header={header} data={cart} onRemove={removeFromCart} onAmountChanged={changeAmount} />
        </TableSection>
        <section>
          <Title>Finalize your order in just three steps</Title>
          <StepperContainer>
            <StepperForms>
              {steps.map((step, index) => (
                <StyledCheckoutForm
                  key={index}
                  isActive={index === activeStep}
                  index={index + 1}
                  title={step.title}
                  initialValues={step.initialValues}
                  onSubmit={(values) => {
                    setActiveStep((state) => state + 1)
                    step.onSubmit(values)
                  }}
                  validationShema={step.validationShema}
                >
                  {index === 0 && (
                    <>
                      <StyledRadioButtonsField
                        radioButtons={[
                          { label: 'Individual Person', value: 'indiv' },
                          { label: 'Legal', value: 'legal' },
                        ]}
                        name="personType"
                        disabled={index !== activeStep}
                      />
                      <TextField label="Name" name="name" disabled={index !== activeStep} />
                      <TextField label="First name" name="firstName" disabled={index !== activeStep} />
                      <TextField type="email" label="E-mail" name="email" disabled={index !== activeStep} />
                      <TextArea label="Address" name="address" disabled={index !== activeStep} />
                      <TextField label="IBAN" name="iban" disabled={index !== activeStep} />
                      <TextField label="Bank" name="bank" disabled={index !== activeStep} />
                      <TextField
                        label="Registration Number"
                        name="registrationNumber"
                        disabled={index !== activeStep}
                      />
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <RadioButtonsField
                        label="Method of delivery:"
                        column
                        radioButtons={[
                          { label: 'Pickup from a deposit', value: 'pickup' },
                          { label: 'Express delivery', value: 'express' },
                        ]}
                        name="deliveryMethod"
                        disabled={index !== activeStep}
                      />
                    </>
                  )}
                  {index === 2 && (
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
                        disabled={index !== activeStep}
                      />
                      <RadioButtonsField
                        column
                        radioButtons={[{ label: 'I agree with the Terms and conditions', value: 'agree' }]}
                        name="termsAgree"
                        disabled={index !== activeStep}
                      />
                      <TextArea label="Comments" name="comments" disabled={index !== activeStep} />
                    </>
                  )}
                </StyledCheckoutForm>
              ))}
            </StepperForms>
          </StepperContainer>
        </section>
      </SectionWrapper>
    </Wrapper>
  )
}

export default Cart
