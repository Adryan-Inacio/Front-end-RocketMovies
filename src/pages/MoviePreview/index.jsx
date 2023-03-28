import { Container, Content } from './styles.js'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { StarsRating } from '../../components/StarRating/index.jsx'

import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'

import { api } from '../../services/api.js'

import { useParams, useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useAuth } from '../../hooks/auth.jsx'
import { Button } from '../../components/Button/index.jsx'

export function MoviePreview() {
  const [data, setData] = useState(null)

  const params = useParams()

  const { user } = useAuth()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente remover a nota?')
    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)

      setData(response.data)
    }

    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <div class="sub-header">
              <div className="buttons">
                <ButtonText
                  className="voltar"
                  title="Voltar"
                  icon={<FiArrowLeft />}
                  onClick={handleBack}
                />

                <ButtonText
                  className="excluir"
                  title="Excluir filme"
                  onClick={handleRemove}
                />
              </div>

              <div class="movie">
                <h1>{data.title}</h1>
                <div class="stars">
                  <StarsRating rating={data.rating} />
                </div>
              </div>
              <p>
                <img src={avatarUrl} alt="Imagem do usuário" />
                <span>Por {user.name} </span> <AiOutlineClockCircle />
                <span>{data.created_at}</span>
              </p>
            </div>

            <div class="tags">
              {data.tags.map(tag => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </div>

            <div class="sinopse">
              <p>{data.description}</p>
            </div>
          </Content>
        </main>
      )}
    </Container>
  )
}
