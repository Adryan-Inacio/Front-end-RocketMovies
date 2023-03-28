import { Container } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { TagItem } from '../../components/TagItem'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { FiArrowLeft } from 'react-icons/fi'
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function CreateMovie() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState()
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovie() {
    if (!title) {
      return alert('Digite o título do filme')
    }

    if (!rating) {
      return alert('Insira a nota do filme')
    }

    if (rating > 5 || rating < 1) {
      alert('Insira um número de 1 a 5')
    }

    if (!description) {
      return alert('Digite a descrição do filme')
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo sem adicioná-la. Adicione-a clicando no botão ou deixe o campo vazio'
      )
    }

    await api.post('/notes', {
      title,
      rating,
      description,
      tags
    })
    alert('Nota do filme registrada com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <div class="sub-header">
          <ButtonText
            title="Voltar"
            icon={<FiArrowLeft />}
            onClick={handleBack}
          />

          <h1>Novo filme</h1>
        </div>

        <div class="title-note">
          <Input
            type="text"
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Sua nota (de 0 a 5)"
            min="1"
            max="5"
            onChange={e => setRating(e.target.value)}
          />
        </div>

        <Textarea
          name="comments"
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
        />

        <div class="tags">
          <h2>Marcadores</h2>

          <div class="tags-edit">
            {tags.map((tag, index) => (
              <TagItem
                key={String(index)}
                value={tag}
                onClick={() => {
                  handleRemoveTag(tag)
                }}
              />
            ))}

            <TagItem
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>
        </div>

        <div class="buttons">
          <Button title="Excluir filme" onClick={handleBack} />
          <Button title="Salvar alterações" onClick={handleNewMovie} />
        </div>
      </main>
    </Container>
  )
}
