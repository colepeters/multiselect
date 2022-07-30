import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Item } from '@radix-ui/react-dropdown-menu'
import PropTypes from 'prop-types'
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
              <Box opacity={checked ? 1 : 0}>
                <FontAwesomeIcon
                  icon={checked === 'indeterminate' ? faMinus : faCheck}
                />
              </Box>
            </Checkbox.Indicator>
          </CheckboxOutline>
          <Box pl={3}>Select all</Box>
        </Label>
      </Checkbox.Root>
    </Item>
  )
}

SelectAll.propTypes = {
  checked: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['indeterminate']),
  ]).isRequired,
  onCheckedChange: PropTypes.func.isRequired,
}
