import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  CheckboxItem as CheckboxItemPrimitive,
  ItemIndicator,
} from '@radix-ui/react-dropdown-menu'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../primitives/Box'
import { checkboxItemWrapperStyle, CheckboxOutline } from './helpers'

const StyledPrimitive = styled(CheckboxItemPrimitive)`
  ${checkboxItemWrapperStyle}
`

export default function CheckboxItem({ label, checked, onCheckedChange }) {
  return (
    <StyledPrimitive
      checked={checked}
      onCheckedChange={onCheckedChange}
      onSelect={(e) => e.preventDefault()}
      textValue='' // disable Radix's builtin typeahead support :(
    >
      <CheckboxOutline checked={checked}>
        <ItemIndicator forceMount>
          <Box opacity={checked ? 1 : 0}>
            <FontAwesomeIcon icon={faCheck} />
          </Box>
        </ItemIndicator>
      </CheckboxOutline>
      <Box pl={3}>{label}</Box>
    </StyledPrimitive>
  )
}

CheckboxItem.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onCheckedChange: PropTypes.func.isRequired,
}
