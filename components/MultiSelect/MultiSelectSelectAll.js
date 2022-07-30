import * as Checkbox from '@radix-ui/react-checkbox'
import { Item } from '@radix-ui/react-dropdown-menu'
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons'
import styled from 'styled-components'

import Box from '../primitives/Box'
import { checkboxItemWrapperStyle, CheckboxOutline } from './helpers'

const Label = styled(Box).attrs({
  as: 'label',
  display: 'flex',
})`
  ${checkboxItemWrapperStyle}
`

export default function SelectAll({ checked, onCheckedChange }) {
  return (
    <Item asChild onSelect={(e) => e.preventDefault()}>
      <Checkbox.Root
        asChild
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Label>
          <CheckboxOutline checked={checked}>
            <Checkbox.Indicator forceMount>
              <Box opacity={checked ? 1 : 0} position='relative' top={-1}>
                {checked === 'indeterminate' ? (
                  <DividerHorizontalIcon />
                ) : (
                  <CheckIcon />
                )}
              </Box>
            </Checkbox.Indicator>
          </CheckboxOutline>
          <Box pl={3}>Select all</Box>
        </Label>
      </Checkbox.Root>
    </Item>
  )
}
