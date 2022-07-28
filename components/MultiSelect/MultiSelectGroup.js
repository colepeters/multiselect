import { Group, Label } from '@radix-ui/react-dropdown-menu'
import PropTypes from 'prop-types'

import Box from '../primitives/Box'
import Text from '../primitives/Text'

export default function MultiSelectGroup({ label, children }) {
  return (
    <Group asChild>
      <Box pt={4}>
        <Label asChild>
          <Text fontSize={0} px={4} pb={4} fontWeight='medium' color='gray900'>
            {label}
          </Text>
        </Label>
        {children}
      </Box>
    </Group>
  )
}

MultiSelectGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
