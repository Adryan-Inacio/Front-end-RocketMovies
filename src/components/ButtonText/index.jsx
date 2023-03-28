import { Container } from './styles'

export function ButtonText({ title, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon}
      {title}
    </Container>
  )
}

/*

import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

export function ButtonText({ title, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      <FiArrowLeft />
      {title}
    </Container>
  )
}


*/
