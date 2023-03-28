import { Container, Form, Background } from './styles'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

import { FiMail, FiLock } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { useState } from 'react'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          type="text"
          placeholder="E-mail"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <div class="button-text">
          <Link to="/register">
            <ButtonText title="Criar conta" />
          </Link>
        </div>
      </Form>

      <Background />
    </Container>
  )
}
