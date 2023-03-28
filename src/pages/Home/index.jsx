import { Container, SubHeader, Content } from './styles'

import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { Button } from '../../components/Button'

import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

import { useNavigate } from 'react-router-dom'

export function Home() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setMovies(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)} />

      <SubHeader>
        <div class="sub-header">
          <h1>Meus filmes</h1>

          <Link to="/new">
            <Button title="Adicionar filme" icon={FiPlus} />
          </Link>
        </div>
      </SubHeader>

      <main>
        <Content>
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            ))}
          </div>
        </Content>
      </main>
    </Container>
  )
}
