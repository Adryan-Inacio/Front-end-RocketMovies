import { Link } from 'react-router-dom'
import { Container, Profile } from './styles'

import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { api } from '../../services/api'

export function Header({ onChange, ...rest }) {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <div>
        <h1>RocketMovies</h1>
        <input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={onChange}
        />
        <Profile>
          <div>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>
            <Link to="/" onClick={signOut}>
              <span>Sair</span>
            </Link>
          </div>

          <Link class="image" to="/profile">
            <img src={avatarUrl} alt={`Foto de ${user.name}`} />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}
