import React, { useContext } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import { COLORS } from '../../utils/theme'
import Button from '../../components/Button'
import TextField from '../../components/Form/fields/TextField'
import Form from '../../components/Form'

import AuthContext from '../../context/authContext'
import CClogo from '../../images/CCLogoBig.png'

const Wrapper = styled.div`
  background-color: #f5f6f8;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`

const Content = styled.div`
  padding: 50px;
  margin: 0 auto;
`

const LogoContainer = styled.div`
  text-align: center;
  padding: 0 0 150px 0;
`

const Logo = styled.img`
  width: 180px;
`

const FormContainer = styled.div`
  background-color: ${COLORS.white};
  padding: 50px 60px 40px;
  border-radius: 2px;
  box-shadow: 0px 0px 4px 0px rgba(43, 48, 61, 0.3) inset;
`

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  font-weight: 400;
  margin: 0 0 40px;
  color: #a6a6a6;
`

const Subtitle = styled.p`
  font-size: 1.7rem;
  text-align: center;
  font-weight: 400;
  margin: 0 0 20px;
`
const StyledTextField = styled(TextField)`
  width: 340px;
  margin: 0 0 15px 0;

  label > input {
    height: 50px;
    padding: 10px 20px;
  }
`

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 0 0 15px 0;
`
const Info = styled(Subtitle)`
  margin: 0;
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
          <Logo src={CClogo} />
        </LogoContainer>
        <FormContainer>
          <Title>Welcome!</Title>
          <Subtitle>Please fill in your email address</Subtitle>
          <Form initialValues={{ email: '', password: '', name: '' }} onSubmit={onSubmit[authFlowIndex]}>
            {() => (
              <>
                <StyledTextField type="email" required placeholder="Email" name="email" disabled={!!email} />
                {email && <StyledTextField type="password" placeholder="Password" name="password" />}
                {!existingUser && email && <StyledTextField type="text" placeholder="Name" name="name" />}
                <SubmitButton type="submit">{submitText[authFlowIndex]}</SubmitButton>
              </>
            )}
          </Form>
          <Info>Don't have an account yet?</Info>
          <Info>You can create one in the next step.</Info>
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
