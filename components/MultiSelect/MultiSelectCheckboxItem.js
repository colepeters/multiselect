import {
  CheckboxItem as CheckboxItemPrimitive,
  ItemIndicator,
} from '@radix-ui/react-dropdown-menu'
import { CheckIcon } from '@radix-ui/react-icons'
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
      textValue='' // disable Radix's builtin typeahead support :(
    >
      <Box
        size={16}
        bg={checked ? 'black' : 'transparent'}
        color='white'
        border='1px solid'
        borderColor='gray900'
        borderRadius='xsmall'
        display='flex'
        justifyContent='center'
        flexShrink={0}
      >
        <ItemIndicator>
          <CheckIcon />
        </ItemIndicator>
      </Box>
      <Text pl={2}>{label}</Text>
    </StyledPrimitive>
  )
}
