import styled from 'styled-components'

import Box from './primitives/Box'

const CheckboxOutline = styled(Box).attrs((props) => ({
  size: 16,
  bg: props.checked ? 'black' : 'transparent',
  color: 'white',
  border: '1px solid',
  borderColor: 'gray900',
  borderRadius: 'xsmall',
  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
  position: 'relative',
  top: '3px',
}))``

CheckboxOutline.displayName = 'CheckboxOutline'

export default CheckboxOutline
