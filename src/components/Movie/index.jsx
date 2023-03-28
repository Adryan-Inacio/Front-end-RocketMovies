import { Container } from './styles'

import { StarsRating } from '../StarRating'

import { Tag } from '../Tag'

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div class="stars">
        <StarsRating rating={data.rating} />
      </div>
      <p>{data.description}</p>

      <div class="tags">
        {data.tags.map(tag => (
          <Tag key={String(tag.id)} title={tag.name} />
        ))}
      </div>
    </Container>
  )
}
