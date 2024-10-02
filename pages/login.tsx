import LoginForm from '@/components/LoginForm'
import { LoginContainer } from '@/styles/loginstyles'
import { Container, Main } from '@/styles/sharedstyles'
import React from 'react'

const Login = () => {
  return (

    <Container>
      <Main>
        <LoginContainer>

          <LoginForm />
        </LoginContainer>
      </Main>

    </Container>
  )
}

export default Login