import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../utils/theme'
import Button from '../../components/Button'
import TextField from '../../components/Form/fields/TextField'
import Form from '../../components/Form'

const Wrapper = styled.div`
  background-color: ${COLORS.lightSilver};
  display: flex;
  width: 100%;
  justify-content: center;
`

const Content = styled.div`
  border: 1px solid black;
  width: 100%;
  max-width: 350px;
  padding: 25px;
  margin: 0 auto;
`

const LogoContainer = styled.div`
  border: 1px solid black;
  padding: 0 0 80px 0;
`

const Logo = styled.img`
  height: 72px;
`

const FormContainer = styled.div`
  border: 1px solid black;
  background-color: white;
  padding: 25px;
`

const Title = styled.h1`
  color: ${COLORS.silver};
  text-align: center;
  margin-top: 0;
`

const Subtitle = styled.h3`
  text-align: center;
`
const StyledTextField = styled(TextField)`
  margin: 0 0 15px 0;
`

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 0 0 15px 0;
`
const Info = styled.p`
  margin: 0;
  text-align: center;
`
const LinkContainer = styled.div`
  width: 100%;
  padding: 15px;
  padding-bottom: 0;
  text-align: center;
`

function Auth() {
  const [existingUser, setExistingUser] = useState(0)

  const onSubmit = [checkUser, logIn, register]
  const submitText = ['Continue', 'Log in', 'Register']

  return (
    <Wrapper>
      <Content>
        <LogoContainer>
          <Logo src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" />
        </LogoContainer>
        <FormContainer>
          <Title>Welcome!</Title>
          <Subtitle>Please add your emai!</Subtitle>
          <Form initialValues={{ email: '', password: '', name: '' }} onSubmit={onSubmit[existingUser]}>
            {() => (
              <>
                <StyledTextField type="email" label="Email" placeholder="Email" name="email" />
                {!!existingUser && (
                  <StyledTextField type="password" label="Password" placeholder="Password" name="password" />
                )}
                {existingUser === 2 && <StyledTextField type="text" label="Name" placeholder="Name" name="name" />}
                <SubmitButton type="submit">{submitText[existingUser]}</SubmitButton>
              </>
            )}
          </Form>
          <Info>Some text here!</Info>
          <Info>Some longer text here!</Info>
        </FormContainer>
        <LinkContainer>
          <Button variant="text">Some Link</Button>
        </LinkContainer>
      </Content>
    </Wrapper>
  )

  function checkUser(value) {
    console.log(value)
    setExistingUser(existingUser + 1)
  }
  function logIn(value) {
    console.log(value)
    setExistingUser(existingUser + 1)
  }
  function register(value) {
    console.log(value)
  }
}

export default Auth
