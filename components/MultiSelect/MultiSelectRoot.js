import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { TriangleDownIcon } from '@radix-ui/react-icons'
import PropTypes from 'prop-types'

import Text from '../primitives/Text'
import MultiSelectContent from './MultiSelectContent'
import MultiSelectTrigger from './MultiSelectTrigger'

export default function MultiSelectRoot({ label, children }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <MultiSelectTrigger>
          <Text as='span' pr={1}>
            {label}
          </Text>
          <TriangleDownIcon />
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
