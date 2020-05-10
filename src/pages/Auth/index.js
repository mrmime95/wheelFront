import React, { useContext } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import { COLORS } from '../../utils/theme'
import Button from '../../components/Button'
import TextField from '../../components/Form/fields/TextField'
import Form from '../../components/Form'

import AuthContext from '../../context/authContext'

const Wrapper = styled.div`
  background-color: ${COLORS.lightSilver};
  display: flex;
  width: 100%;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 25px;
  margin: 0 auto;
`

const LogoContainer = styled.div`
  padding: 0 0 80px 0;
`

const Logo = styled.img`
  height: 72px;
`

const FormContainer = styled.div`
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
  const { isAuthenticated, existingUser, email } = useContext(AuthContext).state
  const { handleUserExistsChecker, handleUserLogIn, handleUserRegister } = useContext(AuthContext).functions

  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  const onSubmit = [checkUser, logIn, register]
  const submitText = ['Continue', 'Log in', 'Register']

  const authFlowIndex = !existingUser && !email ? 0 : !existingUser && email ? 2 : 1

  return (
    <Wrapper>
      <Content>
        <LogoContainer>
          <Logo src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" />
        </LogoContainer>
        <FormContainer>
          <Title>Welcome!</Title>
          <Subtitle>Please add your emai!</Subtitle>
          <Form initialValues={{ email: '', password: '', name: '' }} onSubmit={onSubmit[authFlowIndex]}>
            {() => (
              <>
                <StyledTextField
                  type="email"
                  required
                  label="Email"
                  placeholder="Email"
                  name="email"
                  disabled={!!email}
                />
                {email && <StyledTextField type="password" label="Password" placeholder="Password" name="password" />}
                {!existingUser && email && <StyledTextField type="text" label="Name" placeholder="Name" name="name" />}
                <SubmitButton type="submit">{submitText[authFlowIndex]}</SubmitButton>
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
    handleUserExistsChecker(value.email)
  }
  function logIn(value) {
    handleUserLogIn(value.password)
  }

  // eslint-disable-next-line no-unused-vars
  function register({ email, ...rest }) {
    handleUserRegister(rest)
  }
}

export default Auth
