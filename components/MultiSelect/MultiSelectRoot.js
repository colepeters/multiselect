import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import PropTypes from 'prop-types'

import Text from '../primitives/Text'
import MultiSelectContent from './MultiSelectContent'
import MultiSelectTrigger from './MultiSelectTrigger'

export default function MultiSelectRoot({ label, children }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <MultiSelectTrigger>
          <Text as='span' pr={2}>
            {label}
          </Text>
          <FontAwesomeIcon icon={faCaretDown} />
        </MultiSelectTrigger>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          asChild
          align='start'
          side='bottom'
          sideOffset={8}
        >
          <MultiSelectContent>{children}</MultiSelectContent>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

MultiSelectRoot.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

MultiSelectRoot.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
