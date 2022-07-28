import {
  CheckboxItem as CheckboxItemPrimitive,
  ItemIndicator,
} from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

import Box from '../primitives/Box'
import Text from '../primitives/Text'

const StyledPrimitive = styled(CheckboxItemPrimitive)`
  display: flex;
  cursor: pointer;
  padding: ${(props) => props.theme.space[3]}px
    ${(props) => props.theme.space[4]}px;

  &:hover,
  &:focus {
    outline: none;
    background: ${(props) => props.theme.colors.gray100};
  }
`

export default function CheckboxItem({ label, checked, onCheckedChange }) {
  return (
    <StyledPrimitive
      checked={checked}
      onCheckedChange={onCheckedChange}
      onSelect={(e) => e.preventDefault()}
    >
      <Box
        size={16}
        bg={checked ? 'black' : 'transparent'}
        border='1px solid'
        borderColor='gray900'
        borderRadius='xsmall'
        flexShrink={0}
      >
        <ItemIndicator />
      </Box>
      <Text pl={2}>{label}</Text>
    </StyledPrimitive>
  )
}
