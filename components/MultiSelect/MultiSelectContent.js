import styled from 'styled-components'

import Box from '../primitives/Box'

const MultiSelectContent = styled(Box).attrs({
  bg: 'white',
  borderRadius: 'small',
  boxShadow: 1,
  fontSize: 1,
  width: 240,
  py: 2,
})``

MultiSelectContent.displayName = 'MultiSelectContent'

export default MultiSelectContent
